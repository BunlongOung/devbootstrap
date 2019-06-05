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

export default class Login extends Component {
  state={
    email: "",
    password: "",
    loading:false
  }

  onLogin = () => {
    const { email, password } = this.state

    if (password.length < 6){
      alert("Password must be at least 6 Character")
      return
    }

    const endpoint = 'http://demo.oscarhq-test.com/api/v1/auth/sign_in'
    const credentail = { email, password }

    axios.post(endpoint, credentail)
      .then(response => {
        alert('Success')
      })
      .catch(error => {
        alert('Invalid Log In')
      })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.text}>
          <Text>DevBootStrap</Text>
        </View>
        <TextInput
          style={styles.box}
          placeholder="Email"
          autoCapitalize="none"
          textContentType="emailAddress"
          onChangeText={text=> this.setState({email: text})}
        />
        <TextInput style={styles.box}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={text=> this.setState({password: text})}
        />
        <TouchableOpacity style={styles.row} onPress={this.onLogin}>
          <View>
            {
              this.state.loading
                ? <ActivityIndicator />
                : <Text>Log In</Text>
            }
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
  },
  box:{
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    width: 200,
    margin: 10,
    padding: 10
  },
  login: {
    flex: 1,
    flexDirection: 'row'
  }
});

