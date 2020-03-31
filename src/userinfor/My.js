import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Image,
    Dimensions,
    FlatList,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import Button from 'react-native-button';
const {width}=Dimensions.get('window');
const s=width/640;
// 个人中心
const list1=[
    {
        img:require('../../assets/set.png'),
        title:'账户管理',
    },
    {
        img:require('../../assets/dizhi.png'),
        title:'收货地址',
    },
    {
        img:require('../../assets/xinxi.png'),
        title:'我的信息',
    },
    {
        img:require('../../assets/dingdan.png'),
        title:'我的订单',
    },
    {
        img:require('../../assets/erweima.png'),
        title:'我的二维码',
    },
    {
        img:require('../../assets/jifen.png'),
        title:'我的积分',
    },
    {
        img:require('../../assets/shoucang.png'),
        title:'我的收藏',
    },
];
const list2=[
    {
        img:require('../../assets/weixiu.png'),
        title:'居家维修保养',
    },
    {
        img:require('../../assets/chuxing.png'),
        title:'出行接送',
    },
    {
        img:require('../../assets/ren.png'),
        title:'我的受赠人',
    },
    {
        img:require('../../assets/chuang.png'),
        title:'我的住宿优惠',
    },
    {
        img:require('../../assets/huodong2.png'),
        title:'我的活动',
    },
    {
        img:require('../../assets/fabu.png'),
        title:'我的发布',
    },
]
// 拍照编辑头像
const options={
    title: '上传头像',
    takePhotoButtonTitle:'拍照',
    cancelButtonTitle:'取消',
    chooseFromLibraryButtonTitle:'选择相册',
    customButtoms:[{name:'fb',title:'Choose Photo from Facebook'}],
    stroageOptions:{
        skipBackup:true,
        path:'images',
    },
};
export default class My extends Component {
    constructor(){
        super();
        this.state={
            imageUrl:'',
            username:''
        }
    }
    // 拍照
    takephoto=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
                const source = { uri: response.uri };
                this.setState({
                    imageUrl: source
                });
                AsyncStorage.setItem('path',
                    JSON.stringify(source), 
                    ()=>{
                        console.log('success')
                    }
                )
                
            }
        });
    }
    componentDidMount(){
        AsyncStorage.getItem('path')
        .then(
            (res)=>{
                if(res===null){
                    this.setState({
                        imageUrl: require('../../assets/tx.png')
                    });
                }else{
                    this.setState({
                        imageUrl: JSON.parse(res)
                    });
                }  
        })
    }
    back=()=>{
        AsyncStorage.removeItem('user')
        .then(res=>{
            Actions.replace('login');
        });
        
    }
    render() {
        return (
            <>
                <StatusBar backgroundColor='#f23030'/>
                <ScrollView>
                    {/* 头 */}
                    <View style={styles.header}>
                        <TouchableOpacity onPress={()=>{this.takephoto()}}>
                            <View style={styles.head}
                            >
                                <Image 
                                    style={styles.tx}
                                    source={this.state.imageUrl}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.name}>BINNU DHILLON</Text>
                    </View>
                    {/* 个人中心 */}
                    <View style={styles.midd}>
                        <Image source={require('../../assets/person.png')}
                                resizeMode='contain'
                                style={{width:40*s,height:40*s,marginLeft:20*s}}
                        />
                        <Text style={{marginLeft:20*s,
                                    fontSize:13,
                                    color:'#4f4e4e'
                                }}
                        >我的个人中心</Text>
                    </View>
                    <View style={[styles.midbox,{height:400*s}]}>
                        <FlatList
                            data={list1}
                            numColumns={3}
                            renderItem={({item})=>(
                                <View style={styles.mylist}>
                                    <Image source={item.img}
                                            style={{width:40*s,height:40*s,marginBottom:10*s}}
                                    />
                                    <Text
                                        style={{fontSize:11,
                                            color:'#4f4e4e',
                                            fontFamily:'宋体',
                                            textAlign:'center'
                                        }}
                                    >{item.title}</Text>
                                </View>
                            )}
                        />
                    </View>
                    {/* E族活动 */}
                    <View style={[styles.midd,{marginTop:10}]}>
                        <Image source={require('../../assets/huodong.png')}
                                style={{width:40*s,height:40*s,marginLeft:20*s}}
                        />
                        <Text style={{marginLeft:20*s,
                                    fontSize:13,
                                    color:'#4f4e4e'
                                }}
                        >E族活动</Text>
                    </View>
                    <View style={[styles.midbox,{height:300*s}]}>
                        <FlatList
                            data={list2}
                            numColumns={3}
                            renderItem={({item,index})=>(
                                index===5?
                                <View style={styles.mylist2}>
                                    <TouchableOpacity style={{alignItems:'center'}} onPress={()=>Actions.release()}>
                                        <Image source={item.img}
                                                resizeMode='contain'
                                                style={{width:40*s,height:40*s,marginBottom:10*s}}
                                        />
                                        <Text
                                        style={{fontSize:11,
                                            color:'#4f4e4e',
                                            fontFamily:'宋体',
                                            textAlign:'center'
                                        }}
                                        >{item.title}</Text>
                                    </TouchableOpacity> 
                                </View>:
                                 <View style={styles.mylist2}>
                                 <Image source={item.img}
                                         resizeMode='contain'
                                         style={{width:40*s,height:40*s,marginBottom:10*s}}
                                 />
                                 <Text
                                     style={{fontSize:11,
                                         color:'#4f4e4e',
                                         fontFamily:'宋体',
                                         textAlign:'center'
                                     }}
                                    
                                 >{item.title}</Text>
                             </View>
                            )}
                        />
                    </View>
                    {/* footer */}
                    <View style={styles.footer}>
                        <TouchableOpacity onPress={this.back}>
                            <Text
                                style={{
                                    color:'#767676',
                                    fontSize:15
                                }}
                            >BINNU DHILLON  |  退出</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </>
        )
    }
}
const styles=StyleSheet.create({
    // 头
    header:{
        width:width,
        height:325*s,
        backgroundColor:'#f23030',
        justifyContent:'center',
        alignItems:'center'
    },
    head:{
        width:150*s,
        height:150*s,
        backgroundColor:'#fff',
        borderRadius:75*s,
        justifyContent:'center',
        alignItems:'center'
    },
    tx:{
        width:144*s,
        height:144*s,
        borderRadius:72*s,
    },
    name:{
       fontSize:15,
       color:'#fff' 
    },
    // 个人中心
    midd:{
        width:width,
        height:100*s,
        backgroundColor:'#fff',
        flexDirection:'row',
        alignItems:'center',
        borderBottomWidth:1/3,
        borderBottomColor:'#dfdede'
    },
    midbox:{
        width:width,
        backgroundColor:'#fff',
    },
    mylist:{
        width:125*s,
        marginHorizontal:40*s,
        marginTop:35*s,
        alignItems:'center'
    },
    // E族活动
    mylist2:{
        width:150*s,
        marginLeft:40*s,
        marginRight:15*s,
        marginTop:35*s,
        alignItems:'center'
    },
    // footer
    boxbtn:{
        height:65*s,
        width:width,
        marginTop:30*s
    },
    btn:{
        width:545*s,
        height:60*s,
        borderRadius:10*s,
        marginHorizontal:50*s,
        color:'#fff',
        paddingVertical:13*s,
        backgroundColor:'#f23030'
    },
    footer:{
        width:width,
        height:100*s,
        justifyContent:'center',
        alignItems:'center'
    }
})
