import React, {Component} from 'react';
import {View, Text, Dimensions,Image, TextInput, TouchableOpacity,AsyncStorage,ToastAndroid,ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils/Utils.js';
const {width}=Dimensions.get('window');
const s=width/640;
export default class Login extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userhandle=(text)=>{
        this.setState({username:text})
    }
    pwdhandle=(text)=>{
        this.setState({pwd:text})
    }
    login=()=>{
        this.setState({isloading:true})
        myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd
        }).then(res=>{
            AsyncStorage.setItem('user',JSON.stringify(res.data))
            .then(()=>{
                this.setState({isloading:false})
                Actions.home();
        })
       })
    }
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center'}}>
        <View
          style={{ alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>

            <TextInput  
                onChangeText={this.userhandle}
                placeholder="用户名"
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput 
                secureTextEntry={true} 
                onChangeText={this.pwdhandle}
                placeholder="密码" 
            />
          </View>
          <TouchableOpacity 
              style={{
                  width: '80%',
                  height: 40,
                  backgroundColor: '#ccc',
                  marginTop: 30,
                  alignItems: 'center',
                  justifyContent: 'center'
              }}
              onPress={this.login}>
              <Text>登录</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{
                width: '20%',
                height: 40,
                marginTop: 30,
                alignItems: 'center',
                marginLeft:260
            }}
            onPress={()=>Actions.reg()}>
            <Text>去注册</Text>
        </TouchableOpacity>
        </View>
        {
            this.state.isloading
            ?<View><ActivityIndicator size='large' color='red'/><Text style={{marginLeft:280*s}}>正在登陆...</Text></View>
            :null
        }
      </View>
    );
  }
}