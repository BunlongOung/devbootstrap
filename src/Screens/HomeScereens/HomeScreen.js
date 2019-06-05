import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, TextInput, StatusBar, ActivityIndicator } from 'react-native'
import axios from 'axios'

export default class HomeScreen extends React.Component {
  state = {
    email: "",
    password: "",
    loading: false
  }

  onLogin = () => {
    const { email, password } = this.state
    if (password.length < 6) {
      alert("Your password must be at least 6 charector")
      return 
    } else if (!email.includes('@') && !email.includes('.')) {
      alert("You need to complete by add '@' or '.' ")
      return 
    }
    this.setState({ loading: true })

    const endpoint = 'http://demo.oscarhq-test.com/api/v1/auth/sign_in'
    const credentail = { email, password }
    axios.post(endpoint, credentail)
      .then(response => {
        alert("Sucessed");
        this.setState({ loading: false })
      })
      .catch(error => {
        alert("Cannot login");
        this.setState({ loading: false })
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.row}>
          <Text style={styles.facebook}>Facebook</Text>
          <TextInput
            style={styles.text}
            placeholder="Email"
            autoCapitalize='none'
            textContentType='emailAddress'
            onChangeText={text => this.setState({ email: text })}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.text}
            placeholder="Password"
            onChangeText={text => this.setState({ password: text })}
          />
          <TouchableOpacity onPress={this.onLogin}>
            <View style={styles.button}>
              {
                this.state.loading
                  ? <ActivityIndicator />
                  : <Text style={styles.login} >Login</Text>
              }
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    backgroundColor: 'white',
    marginTop: 40,
    borderColor: 'black',
    borderRadius: 5,
    width: 300,
    height: 50,
    fontSize: 20,
    paddingLeft: 20
  },
  facebook: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
    padding: 10,
    marginTop: 20,
    width: 300,
    height: 50,
    borderRadius: 5,
  },
  login: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  }
})