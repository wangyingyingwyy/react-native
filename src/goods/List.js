import React,{Component} from 'react';
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
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width}=Dimensions.get('window');
const s=width/640;

export default class List extends Component {
    render() {
        return (
            <ScrollView>
                {/* 搜索栏 */}
                <View style={styles.box1}>
                    <View style={styles.search}>
                        <TextInput placeholder="请输入商品名称"
                                    placeholderTextColor='#999'
                                    style={{width:480*s,paddingTop:0,paddingBottom:0,paddingLeft:35*s,fontSize:15}}          
                        />
                        <Icon name='search'
                            style={{fontSize:22,color:'#999'}}
                        />
                    </View>
                </View>
            {/* 导航栏 */}
            <View style={styles.nav}>
                <TouchableOpacity>
                    <Text style={{
                            color:'#F08080',
                            fontSize:15
                        }}
                    >综合</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{
                            color:'#333',
                            fontSize:15
                        }}
                    >销量</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{
                            color:'#333',
                            fontSize:15
                        }}
                    >新品</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{
                            color:'#333',
                            fontSize:15
                        }}
                    >价格</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{
                            color:'#333',
                            fontSize:15
                        }}
                    >信用</Text>
                </TouchableOpacity>
            </View>
            {/* 商品展示 */}
            <View style={styles.bbox}>
                <View style={{marginTop:15,flexDirection:'row',justifyContent:'space-around'}}>
                    <View style={styles.sbox}>
                        <Image source={require('../../assets/shu1.png')}
                                style={styles.photo}
                        />
                        <Text style={styles.wenzi}>
                        Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
                        </Text>
                        <Text style={{
                                     color:'#F08080',
                                     marginLeft:-220*s,
                                     marginTop:15*s,
                                     fontSize:13
                                    }}
                        >36.00</Text>
                    </View>
                    <View style={styles.sbox}>
                        <Image source={require('../../assets/shu2.png')}
                                style={styles.photo2}
                        />
                        <Text style={styles.wenzi}>
                        Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
                        </Text>
                        <Text style={{
                                    color:'#F08080',
                                    marginLeft:-220*s,
                                    marginTop:15*s,
                                    fontSize:13
                                    }}
                        >36.00</Text>
                    </View>
                </View>
                <View style={{marginTop:15,flexDirection:'row',justifyContent:'space-around'}}>
                    <View style={styles.sbox}>
                        <Image source={require('../../assets/shu1.png')}
                                style={styles.photo}
                        />
                        <Text style={styles.wenzi}>
                        Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
                        </Text>
                        <Text style={{
                                     color:'#F08080',
                                     marginLeft:-220*s,
                                     marginTop:15*s,
                                     fontSize:13
                                    }}
                        >36.00</Text>
                    </View>
                    <View style={styles.sbox}>
                        <Image source={require('../../assets/shu2.png')}
                                style={styles.photo2}
                        />
                        <Text style={styles.wenzi}>
                        Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
                        </Text>
                        <Text style={{
                                    color:'#F08080',
                                    marginLeft:-220*s,
                                    marginTop:15*s,
                                    fontSize:13
                                    }}
                        >36.00</Text>
                    </View>
                </View>
                <View style={{marginTop:15,flexDirection:'row',justifyContent:'space-around'}}>
                    <View style={styles.sbox}>
                        <Image source={require('../../assets/shu1.png')}
                                style={styles.photo}
                        />
                        <Text style={styles.wenzi}>
                        Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
                        </Text>
                        <Text style={{
                                     color:'#F08080',
                                     marginLeft:-220*s,
                                     marginTop:15*s,
                                     fontSize:13
                                    }}
                        >36.00</Text>
                    </View>
                    <View style={styles.sbox}>
                        <Image source={require('../../assets/shu2.png')}
                                style={styles.photo2}
                        />
                        <Text style={styles.wenzi}>
                        Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
                        </Text>
                        <Text style={{
                                    color:'#F08080',
                                    marginLeft:-220*s,
                                    marginTop:15*s,
                                    fontSize:13
                                    }}
                        >36.00</Text>
                    </View>
                </View>
                <View style={{marginTop:15,flexDirection:'row',justifyContent:'space-around'}}>
                    <View style={styles.sbox}>
                        <Image source={require('../../assets/shu1.png')}
                                style={styles.photo}
                        />
                        <Text style={styles.wenzi}>
                        Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
                        </Text>
                        <Text style={{
                                     color:'#F08080',
                                     marginLeft:-220*s,
                                     marginTop:15*s,
                                     fontSize:13
                                    }}
                        >36.00</Text>
                    </View>
                    <View style={styles.sbox}>
                        <Image source={require('../../assets/shu2.png')}
                                style={styles.photo2}
                        />
                        <Text style={styles.wenzi}>
                        Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳
                        </Text>
                        <Text style={{
                                    color:'#F08080',
                                    marginLeft:-220*s,
                                    marginTop:15*s,
                                    fontSize:13
                                    }}
                        >36.00</Text>
                    </View>
                </View>
             
            </View>
            </ScrollView>
        )
    }
};

const styles = StyleSheet.create({
box1:{
    height:72*s,
    backgroundColor:'#fff',
    borderBottomWidth:1,
    borderBottomColor:'#dfdede',
    justifyContent:'center',
    alignItems:'center'
},
search:{
    width:545*s,
    height:50*s,
    backgroundColor:'#eee',
    borderRadius:5,
    flexDirection:'row',
    alignItems:'center'
},
nav:{
    height:72*s,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'

},
bbox:{
    width:width,
},
sbox:{
    width:295*s,
    height:420*s,
    backgroundColor:'#fff',
    alignItems:'center'
},
photo:{
    width:160*s,
    height:195*s,
    marginVertical:30*s,
},
photo2:{
    width:205*s,
    height:195*s,
    marginVertical:20*s,
},
wenzi:{
    lineHeight:25*s,
    marginHorizontal:10*s,
    fontSize:13,
    color:'#666'
}
});
