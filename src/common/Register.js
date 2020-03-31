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
            ppwd:'',
            phone:'',
            code:'验证码',
            isregister:false,
        }
    }
    userhandle=(text)=>{
        this.setState({username:text})
    }
    pwdhandle=(text)=>{
        this.setState({pwd:text})
    }
    ppwdhandle=(text)=>{
      this.setState({ppwd:text})
    }
    phonehandle=(text)=>{
      this.setState({phone:text})
    }
    code=()=>{
      myFetch.get('/code')
      .then(res=>{
        this.setState({
          code:res.data.code
        })
      });
    }
    register=()=>{
      if(this.state.username===''){
        ToastAndroid.show("用户名不能为空",ToastAndroid.TOP);
      }else if(this.state.pwd===''){
        ToastAndroid.show("密码不能为空",ToastAndroid.TOP);
      }else if(this.state.pwd!==this.state.ppwd){
        ToastAndroid.show('两次密码不一致！',ToastAndroid.TOP);
      }else if(!/^1[3|4|5|6|7|8|9|][0-9]{9}$/.test(this.state.phone)){
        ToastAndroid.show('手机号格式有误',ToastAndroid.TOP)
      }else{
         this.setState({isregister:true}) ;
          myFetch.post('/register',{
            username:this.state.username,
            pwd:this.state.pwd,
            phone:this.state.phone
        }).then(res=>{
          if(res.data.userInfo.flag===0){
            ToastAndroid.show('用户名已存在',ToastAndroid.TOP)
            this.setState({isregister:false})
            Actions.register(); 
          }else{
            AsyncStorage.setItem('reguser',JSON.stringify(res.data.userInfo))
            .then(()=>{
                this.setState({isloading:false})
                Actions.login();
            })
          }           
        })
      }
     
       
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
            <Icon name="lock" color="red"/>
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
            <Icon name="lock" color="red"/>
            <TextInput 
                secureTextEntry={true} 
                onChangeText={this.ppwdhandle}
                placeholder="确认密码" 
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
            <Icon name="mobile" color="red"/>
            <TextInput 
                secureTextEntry={true} 
                onChangeText={this.phonehandle}
                placeholder="手机号" 
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
            <Icon name="paw" color="red"/>
            <TextInput 
                secureTextEntry={true} 
                style={{width:300*s}}
                placeholder={this.state.code} 
            />
            <TouchableOpacity onPress={this.code}><Text>获取验证码</Text></TouchableOpacity>
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