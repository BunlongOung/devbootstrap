import React, { Component } from 'react'
import { View, TextInput, Text, StyleSheet, TouchableOpacity, StatusBar, ActivityIndicator} from 'react-native'
import axios from 'axios'
class HomeScreen extends Component {
  state = {
    email :"",
    password :"",
    loading:false
  }

  handleLogin = () => {
    const{email ,password}= this.state
    if(!email.includes('@' ))
    {
      alert('Email must be have @ ' )
      return
    }

    if(!email.includes('.'))
    {
      alert('Email must be have . ' )
      return
    }

   if(password.length < 6){
     alert('Password must be more then 6 charater')
   }

   this.setState({loading:true})

   const uriOscarhq ="http://demo.oscarhq-test.com/api/v1/auth/sign_in"
   const params ={ email, password }

   axios.post(uriOscarhq, params)

    .then(response => {
      alert('login success');
      this.setState({ loading:false })
    })
    .catch(error =>{
      alert('login error')
      this.setState({ loading:false })
    });
  }

  onInputChange = (field, text) => {
    this.setState({ [field]: text })
  }

  render() {
    return (
       <View style = {styles.container}>
          <StatusBar  barStyle="light-content"/>
          <Text style={styles.text}>Facebook</Text>

          <TextInput 
            style={styles.input} 
            placeholder = "Email"
            textContentType="emailAddress"
            autoCapitalize="none"
            onChangeText={text => this.onInputChange('email', text)}
            />

          <TextInput 
             style={styles.input} 
             placeholder = "Password" 
             secureTextEntry={true}
             autoCapitalize="none"
             onChangeText={text => this.onInputChange('password', text)}
          />
          <TouchableOpacity onPress={this.handleLogin}>
            <View style={styles.controll_button}>
              {
                this.state.loading
                  ? <ActivityIndicator size="large" color="red"/>
                  : <Text style={styles.text_button}>Login</Text>}
            </View>
          </TouchableOpacity>
       </View>
      )
   }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'blue',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    color:'#fff',
    fontSize:40,
    fontWeight:'bold',
  },
  controll_button:{
    margin: 15,
    height: 50,
    width:300,
    borderRadius:6,
    borderColor: 'white',
    borderWidth: 1
  },
  text_button:{
    marginTop:10,
    textAlign:'center',
    fontSize:25,
    color:'white'
  },
  input: {
    backgroundColor:'#fff',
    padding:9,
    margin: 15,
    height: 50,
    width:300,
    borderRadius: 6,
    borderColor: 'white',
    borderWidth: 1,
    fontSize: 17
  },
})

export default HomeScreen;