import React, { Component } from 'react';
import { Alert, Button, TextInput, Text,View, StyleSheet,KeyboardAvoidingView,StatusBar ,TouchableOpacity} from 'react-native';
import axios from 'axios'

  export default class Login extends Component {
    state = {
      email:'',
      password:''
    }
    login = () => {
      const {email,password} = this.state
      const endPiont = "http://demo.oscarhq-test.com/api/v1/auth/sign_in"
      const inputedData = {email,password}
      axios.post(endPiont,inputedData)
        .then(response => {
        alert('login success');
        })
        .catch(error =>{
        alert('error')  
        });
        return
    }   

    render() {
      return (
        <KeyboardAvoidingView style={styles.container}>
          <StatusBar backgroundColor='#0000FF'/>
          <Text style={styles.txt}>Authentication</Text>
          <TextInput
            style={styles.input}
            placeholder='Email'
            autoCapitalize="none"
            onChangeText={(email) => this.setState({email})}
          />
          <TextInput 
            style={styles.input}
            placeholder='Password'  
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
          />    
          <TouchableOpacity onPress={this.login}>
          {/* <TouchableOpacity onPress={() => this.login}> */}
             {/* <TouchableOpacity onPress={this.login()}> */}
            <View style={{backgroundColor:'#fff', width:350}}>
              <Text style={{padding:15,textAlign:'center'}}>Log In</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0000FF',
  },
  input: {
    backgroundColor:'#fff',
    width: 350,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius:7
  },
  txt:{
    fontSize:20,
    color:"#fff",
    marginBottom:20
  }
});