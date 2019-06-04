import React, { Component } from 'react'
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'

import styles from './HomeScreen.styles'

export default class HomeScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StatusBar barStyle="light-content"/>

        <View style={styles.header}>
          <Text style={styles.headerText}>facebook</Text>
        </View>
        <TextInput
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
        />
        <TouchableOpacity onPress={ () => alert("Login Success") }>
          <View style={styles.loginButton}>
            <Text style={styles.loginText}>Login</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}
