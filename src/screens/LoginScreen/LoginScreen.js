import React, { Component } from 'react'
import axios from 'axios'
import {
  View,
  Text,
  StatusBar,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'

import styles from './LoginScreen.styles'

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: "",
    password: "",
    loading: false
  }

  onLogin = () => {
    const { email, password } = this.state

    if (password.length < 6) {
      alert("Password must be at least 6 characters")
      return
    }

    this.setState({ loading: true })

    const endpoint = 'http://demo.oscarhq-test.com/api/v1/auth/sign_in'
    const credentail = { email, password }

    axios.post(endpoint, credentail)
    .then(response => {
      this.setState({ loading: false })
      this.props.navigation.navigate('Home')
    })
    .catch(error => {
      alert("Invalid credentail");
      this.setState({ loading: false }) 
    })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StatusBar barStyle="light-content"/>

        <View style={styles.header}>
          <Text style={styles.headerText}>OSCaR</Text>
        </View>
        <TextInput
          placeholder="Email"
          style={styles.input}
          autoCapitalize="none"
          textContentType="emailAddress"
          onChangeText={ text => this.setState({ email: text }) }
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={ text => this.setState({ password: text }) }
        />
        <TouchableOpacity onPress={this.onLogin}>
          <View style={styles.loginButton}>
            {
              this.state.loading
                ? <ActivityIndicator />
                : <Text style={styles.loginText}>Login</Text>
            }
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}
