import React, { Component } from 'react'
import { Text, View, StyleSheet,Dimensions, TouchableOpacity, ToastAndroid,ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const {width,height}=Dimensions.get('window');
const s=width/640;

export default class Release extends Component {
    constructor(){
        super();
        this.state={
           data:[],
           num:1,
           isload:false
        }
    }
    componentDidMount(){
        var page=this.state.num;
        var data1=[];
        this.setState({
            isload:true
        })
        fetch('https://cnodejs.org/api/v1/topics?limit=10&page='+page)
        .then((res)=>res.json())
        .then((res)=>{
            for(var i=0;i<res.data.length;i++){
                var arr=['已回复','待回复'];
                var m=Math.floor(Math.random()*arr.length);
                data1.push(res.data[i]);
                data1[i].reply=arr[m];
            }
            this.setState({
                data:data1,
                num:this.state.num,
                isload:false
            })
        })
    }
    // 点击下一页
    next=()=>{
        var page=this.state.num+1;
        var data1=[];
        fetch('https://cnodejs.org/api/v1/topics?limit=10&page='+page)
        .then((res)=>res.json())
        .then((res)=>{
            for(var i=0;i<res.data.length;i++){
                var arr=['已回复','待回复'];
                var m=Math.floor(Math.random()*arr.length);
                data1.push(res.data[i]);
                data1[i].reply=arr[m];
            }
            this.setState({
                data:data1,
                num:this.state.num+1,
            })
        })
    }
    previous=()=>{
        var page=this.state.num-1;
        if(page===0){
            ToastAndroid.show('已经达到第一个',ToastAndroid.LONG)
        }else{
            var data1=[];
            fetch('https://cnodejs.org/api/v1/topics?limit=10&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                for(var i=0;i<res.data.length;i++){
                    var arr=['已回复','待回复'];
                    var m=Math.floor(Math.random()*arr.length);
                    data1.push(res.data[i]);
                    data1[i].reply=arr[m];
                }
                this.setState({
                    data:data1,
                    num:this.state.num-1,
                })
            })
        }
        
    }
    render() {
        if(this.state.isload){
            return (
                <ActivityIndicator style={{position:'absolute',left:280*s,height:1000*s}} size='large' color='red'/>
            )
        }else{
            return (
            <>
                <View style={styles.header}>
                    <Icon name='angle-left'
                            style={[styles.back,{marginRight:100*s}]}
                            onPress={()=>Actions.pop()}
                    />
                    <Text style={{fontSize:18,color:'#fff'}}
                    >我的发布</Text>
                    <Icon name='ellipsis-h'
                            style={[styles.back,{marginLeft:100*s}]}
                    />
                </View>
                {/* 正文 */}
                <View style={{backgroundColor:'#fff'}}>
                    {
                        this.state.data.map((item)=>(
                            <View style={{flexDirection:'row',height:70*s,borderBottomWidth:1,borderBottomColor:'#999', justifyContent:'space-around',alignItems:'center'}}>
                                <Text style={{width:340*s,fontSize:10}}>{item.title.length > 15 ? item.title.substr(0, 15) + "..." : item.title}</Text>
                                <Text style={{fontSize:10}}>{item.create_at.slice(0,10)}</Text>
                                {
                                    item.reply==='待回复'?<Text style={{color:'red',fontSize:10}}>{item.reply}</Text>:
                                    <Text style={{fontSize:10}}>{item.reply}</Text>
                                }
                            </View>
                        ))
                    }
                    <View style={styles.btn}>
                        <TouchableOpacity style={{
                                        height:50*s,
                                        width:150*s,
                                        borderRadius:30*s,
                                        backgroundColor:'red',
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }}
                                    onPress={()=>this.previous()}
                        ><Text style={{color:'#fff'}}>上一页</Text></TouchableOpacity>
                        <Text style={{height:50*s,lineHeight:50*s}}>第{this.state.num}页</Text>
                        <TouchableOpacity style={{
                                            height:50*s,
                                            width:150*s,
                                            borderRadius:30*s,
                                            backgroundColor:'red',
                                            alignItems:'center',
                                            justifyContent:'center'
                                        }}
                                        onPress={()=>this.next()}
                        ><Text style={{color:'#fff'}}>下一页</Text></TouchableOpacity>

                    </View>
                </View>
            </>
            )
        }
    }
}

const styles=StyleSheet.create({
    header:{
        width:width,
        height:80*s,
        backgroundColor:'#f23030',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    back:{
        fontSize:25,
        color:'#fff',
        // marginRight:100*s
    },
    btn:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginVertical:30*s
    }
})
