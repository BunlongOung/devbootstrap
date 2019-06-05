import React, {Component} from 'react';
import {
  StyleSheet, 
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator
} from 'react-native'

import axios from 'axios'

export default class HomeScreen extends Component {
  state = {
    email: '',
    password:'',
    loading: false
  };

  onLogin = () => {
    const { email, password } = this.state
    if(password.length < 6) {
      alert('Password must be at least 6')
      return
    }
    this.setState({ loading : true })

    const endpoint = 'http://demo.oscarhq-test.com/api/v1/auth/sign_in'
    const credential = { email, password }

    axios.post(endpoint, credential)
      .then(response => {
        alert("Success")
        this.setState({loading : false})
      })
      .catch(error => {
        alert("Invalid Password")
        this.setState({loading : false})
      })
  }

  render(){
    return(
      <KeyboardAvoidingView style={styles.container}> 
        <View>
          <View style={styles.logincolumn}>
            <Text>Username</Text>
            <TextInput 
              style={styles.Input} 
              value={this.state.email}
              onChangeText = {text => this.setState({email : text})}/>

            <Text>Password</Text>
            <TextInput 
              style={styles.Input} 
              value={this.state.password } 
              onChangeText = {text => this.setState({password : text})} 
              secureTextEntry={true}/>
          </View>

          <TouchableOpacity onPress={this.onLogin}>
            <View>
              {
                this.state.loading
                  ? <ActivityIndicator /> 
                  : <Text>Login</Text>
              }
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

  logincolumn: {
    flexDirection : 'column'
  },
      
  Input: {
    width: 200,
    height: 44,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom : 10,
    alignItems : 'center'
  },
  loginButton:{
    alignItems: 'center',
    borderWidth: 40,
    borderColor: 'grey',
    borderStyle: 'solid'
  }
})
