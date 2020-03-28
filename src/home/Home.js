import React, { Component } from 'react'
import {
    View,
    Text, 
    Dimensions,
    ScrollView,
    StyleSheet,
    Image,
    TextInput,
    FlatList,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import Button from 'react-native-button';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width}=Dimensions.get('window');
const s=width/640;
const list=[
    {
        img:require('../../assets/one.png'),
        title:'居家维修保养',
        right:'angle-right',
        color:'#ffcccc'
    },
    {
        img:require('../../assets/two.png'),
        title:'住宿优惠',
        right:'angle-right',
        color:'#ffe1b1'
    },
    {
        img:require('../../assets/three.png'),
        title:'出行接送',
        right:'angle-right',
        color:'#bfe6a8'
    },
    {
        img:require('../../assets/four.png'),
        title:'E族活动',
        right:'angle-right',
        color:'#c3ddf2'
    }
]
export default class Home extends Component {
    render() {
        return (
            <>
            <StatusBar backgroundColor='#ccc'/>
            <ScrollView>
                {/* 搜索栏 */}
                <View style={styles.box1}>
                    <View style={styles.search}>
                        <Icon name='search'
                                style={{fontSize:22,color:'#fff'}}
                        />
                        <TextInput 
                            placeholder="请输入您要搜索的关键字"
                            placeholderTextColor="#fff"
                            style={{width:425*s,paddingTop:0,paddingBottom:0,paddingLeft:25*s,fontSize:15}}          
                        ></TextInput>
                    </View>
                    <View style={{width:50*s,height:40*s,marginVertical:5}}>
                        <Image source={require('../../assets/shop.png')}
                                style={{width:45*s,height:45*s}}
                        />
                    </View>
                </View>
                {/* 轮播图 */}
                <View style={styles.wrapper}>
                    <Swiper 
                        autoplay={true}   //自动轮播
                        autoplayTimeout={3}     //每隔3秒自动轮播
                        paginationStyle={{bottom: 5}}    //小圆点的位置：距离底部5px
                        dot={<View style={{           //未选中的圆点样式
                            backgroundColor: '#fff',
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginLeft: 10,
                            marginRight: 9,
                        }}/>}
                        activeDot={<View style={{    //选中的圆点样式
                            backgroundColor: 'red',
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginLeft: 10,
                            marginRight: 9,
                        }}/>}
                    >
                        <View style={styles.slide}>
                            <Image source={require('../../assets/lunbo1.png')}/>
                        </View>
                        <View style={styles.slide}>
                            <Image source={require('../../assets/lunbo2.png')}/>
                        </View>
                        <View style={styles.slide}>
                            <Image source={require('../../assets/lunbo1.png')}/>
                        </View>
                    </Swiper>
                </View>
                {/* 列表 */}
                <FlatList
                    data={list}
                    renderItem={({item})=>(
                        <View style={styles.list}>
                            {/* 左侧 */}
                            <View style={[styles.left1,{backgroundColor:item.color}]}>
                                <Image source={item.img}
                                        style={{width:40*s,height:40*s,marginLeft:20*s,marginTop:20*s}}
                                />
                            </View>
                            {/* 中间 */}
                            <View style={styles.mid}>
                                <Text
                                    style={{fontSize:15,
                                            color:"#333333",
                                            fontFamily:'微软雅黑',
                                            fontWeight:'light'
                                    }}
                                >{item.title}</Text>
                            </View>
                            {/* 右侧箭头 */}
                            <Icon name={item.right}
                                    style={{fontSize:20,color:'#dfdede'}}
                            />
                        </View>
                    )}
                />
                {/* 按钮 */}
                <View style={styles.boxbtn}>
                    <TouchableOpacity style={styles.btn}><Text style={styles.btntext}>发布需求</Text></TouchableOpacity>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',marginTop:30*s}}>
                    <Text style={styles.last}>©E族之家 版权所有</Text>
                </View>
                
            </ScrollView>
            </>
        )
    }
}

const styles=StyleSheet.create({
    //搜索栏
    box1:{
        width:width,
        height:80*s,
        backgroundColor:'#F08080',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    search:{
        width:520*s,
        height:50*s,
        backgroundColor:'#fbb8b8',
        borderRadius:40,
        marginRight:30*s,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    //轮播图
    wrapper: {
        height:270*s
    },
    slide: {
        height:270*s,
        width:width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    //列表
    list:{
        width:width,
        height:100*s,
        marginTop:15*s,
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    left1:{
        width:80*s,
        height:80*s,
        borderRadius:40*s,
    },
    mid:{
        width:350*s,
        justifyContent:'center'
    },
    boxbtn:{
        height:70*s,
        width:width,
        marginTop:30*s
    },
    btn:{
        width:545*s,
        height:70*s,
        borderRadius:10*s,
        marginHorizontal:50*s,
        backgroundColor:'#F08080',
        justifyContent:'center',
        alignItems:'center'
    },
    btntext:{
        color:'#fff',
        fontSize:15,
    },
    last:{
        color:'#767676',
        fontSize:15
    }
})
