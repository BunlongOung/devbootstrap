import React, { Component } from 'react'
import { connect } from 'react-redux'
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
import { login } from '../../redux/actions/authentication'

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: "",
    password: ""
  }

  onLogin = () => {
    const { email, password } = this.state

    if (password.length < 6) {
      alert("Password must be at least 6 characters")
      return
    }

    this.props.signIn({ email, password })
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
              this.props.loading
                ? <ActivityIndicator />
                : <Text style={styles.loginText}>Login</Text>
            }
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const mapState = state => ({
  loading: state.auth.loading
})

// const mapDispatch = dispatch => ({
//   signIn: credential => dispatch(login(credential))
//   signUp: () => dispatch(signUp())
// })

const mapDispatch = {
  signIn: login
}

export default connect(mapState, mapDispatch)(LoginScreen)
