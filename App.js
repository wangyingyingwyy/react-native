/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState,useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  AsyncStorage,
  BackHandler, 
  ToastAndroid
} from 'react-native';
import {Router, Scene, Tabs,Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from 'react-native-splash-screen'
import Home from './src/home/Home.js';
import List from './src/goods/List.js';
import My from './src/userinfor/My.js';
import Shop from './src/cart/Shop.js';
import Release from './src/userinfor/Release.js';
import SwiperPage from './src/common/SwiperPage.js';
import Login from './src/common/Login.js';
import Register from './src/common/Register.js';
const {width}=Dimensions.get('window');
const s=width/640;
const App=() => {
  let [isLogin,setLogin] = useState(false); 
	let [isFirstInstall,setFirstInstall] = useState(true); 
  let now=0;
  let init=()=>{
     AsyncStorage.getItem("isInstall")
     .then(res=>{
       if(res){
         setFirstInstall(false);
       }
     })
     AsyncStorage.getItem('user')
     .then(res=>{
       let user = JSON.parse(res)
       if(!user){
         SplashScreen.hide();
       }
       if(user){
         setLogin(true);
         SplashScreen.hide();
       }
     })
  }
  useEffect(()=>{
   init();
  },[])
  let afterInstall=()=>{
    setFirstInstall(false)
  }
  if(isFirstInstall){
      return <View style={{flex:1}}>
            <SwiperPage afterInstall={afterInstall}/>
          </View>
  }else{
  return (
    <>
      <Router
        backAndroidHandler={()=>{
          console.log(Actions.currentScene);
          if(Actions.currentScene=='_home'){
             if(new Date().getTime()-now<2000){
              BackHandler.exitApp();
            }else{
              ToastAndroid.show('确定退出吗',100);
              now=new Date().getTime();
              return true;
            }
          }
          if(Actions.currentScene=='login'){
            if(new Date().getTime()-now<2000){
              BackHandler.exitApp();
            }else{
              ToastAndroid.show('确定退出吗',100);
              now=new Date().getTime();
              return true;
            }
          }
          else{
            Actions.pop();
            return true;
          }
        }}
      >
        <Scene>
          <Tabs 
            key='tabbar'
            hideNavBar
            activeTintColor="#f23030"
            inactiveTintColor="#dfdede"
            tabBarStyle={{
              backgroundColor:'#fff',
              borderTopColor:'#dfdede',
              height:80*s}}
          >
            {/* 首页 */}
            <Scene
              key='home'
              title='首页'
              hideNavBar
              icon={
                ({focused})=><Icon 
                color={focused?'#F08080':'#dfdede'} 
                name="home"
                style={{fontSize:25}}
              />
              }
              component={Home}
            />
            {/* 商品分类 */}
            <Scene
              key='list'
              title='商品分类'
              hideNavBar
              icon={
                ({focused})=><Icon 
                color={focused?'#F08080':'#dfdede'} 
                name="th-large"
                style={{fontSize:25}}
              />
              }
              component={List}
            />
            {/* 购物车 */}
            <Scene
              key='shop'
              title='购物车'
              hideNavBar
              icon={
                ({focused})=><Icon 
                color={focused?'#F08080':'#dfdede'} 
                name="cart-plus"
                style={{fontSize:25}}
              />
              }
              component={Shop}
            />
            {/* 个人中心 */}
            <Scene
              key='my'
              title='我的'
              hideNavBar
              icon={
                ({focused})=><Icon 
                color={focused?'#F08080':'#dfdede'} 
                name="user-o"
                style={{fontSize:25}}
              />
              }
              component={My}
            />
          </Tabs>
          <Scene
              key='release'
              hideNavBar
              component={Release}
            />
          <Scene hideNavBar initial={!isLogin} key='login' component={Login}/>
          <Scene hideNavBar key='reg' component={Register}/>
        </Scene>
        
      </Router>
    </>
  );}
};

const styles = StyleSheet.create({

});

export default App;
