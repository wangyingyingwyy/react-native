import React, { Component } from 'react'
import { Text, View,StyleSheet,Image,AsyncStorage,TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper';
import Button from "react-native-button";
export default class SwiperPage extends Component {
    start=()=>{
        AsyncStorage.setItem('isInstall','true');
        this.props.afterInstall();
    }
    render() {
        return (
            <Swiper style={styles.wrapper} >
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../assets/slide.png')}/>
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../assets/slide.png')}/>
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../assets/slide.png')}/>
                    <TouchableOpacity onPress={this.start}  style={styles.start}><Text style={{color:'#fff'}}>开始体验</Text></TouchableOpacity>
                </View>
            </Swiper>
        )
    }
}

const styles=StyleSheet.create({
    wrapper:{
    },
    img:{
        height:'100%'
    },
    slide1: {
        flex: 1,
        height:'100%',
        alignItems: 'center',
        overflow:'hidden'
    },
    start:{
        bottom:150,
        width:120,
        height:40,      
        backgroundColor:'red',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    }
})
