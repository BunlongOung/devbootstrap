import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
}from 'react-native'

export default class Login extends Component{
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.text}>
          <Text>DevBootStrap</Text>
        </View>
        <TextInput style={styles.box}/>
        <TextInput style={styles.box}/>
        <TouchableOpacity style={styles.row}>
          <View>
            <Text>Log In</Text>
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
    fontWeight: 'bold'
    },
  text: {
    fontSize: 20,
  },
  box:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderColor: 'black',
    borderWidth: 1
  },
  login: {
    flex: 1,
    flexDirection: 'row'
  }
});

