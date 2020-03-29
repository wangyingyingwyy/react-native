import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity,Alert,AsyncStorage,ToastAndroid,ActivityIndicator,Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import {myFetch} from '../utils/Utils.js'
const {width}=Dimensions.get('window');
const s=width/640;
export default class Register extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            isregister:false
        }
    }
    userhandle=(text)=>{
        this.setState({username:text})
    }
    pwdhandle=(text)=>{
        this.setState({pwd:text})
    }
    register=()=>{
      this.setState({isregister:true}) 
      myFetch.post('/register',{
          username:this.state.username,
          pwd:this.state.pwd
      }).then(res=>{
          Actions.login();
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
                placeholder="确认密码" 
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
              onPress={this.register}>
              <Text>注册</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              style={{
                  width: '20%',
                  height: 40,
                  marginTop: 30,
                  alignItems: 'center',
                  marginLeft:260
              }}
              onPress={()=>Actions.login()}>
              <Text>去登录</Text>
          </TouchableOpacity>
        </View>
        {
            this.state.isregister
            ?<ActivityIndicator style={{position:'absolute',top:500*s,left:240*s}} size='large' color='#000'/>
            :null
        }
      </View>
    );
  }
}