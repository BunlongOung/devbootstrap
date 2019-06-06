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
import { music } from '../../redux/actions/music'

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: "",
    password: ""
  }

  componentDidMount(){
    this.props.fetchMusic()
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
    //console.log(this.props)
    return (
      //<KeyboardAvoidingView style={styles.container} behavior="padding">
      //<StatusBar barStyle="light-content"/>
    
      <View>
        {
          this.props.musics.map((music,index) => (
          <View  key={index}>
            
            <Text >
              {music.title}
            </Text>
          </View>
          ))
        }

      </View>
    //  style={styles.header}
    //  style={styles.headerText}
    
      //   // {/* <TextInput
      //     placeholder="Email"
      //     style={styles.input}
      //     autoCapitalize="none"
      //     textContentType="emailAddress"
      //     onChangeText={ text => this.setState({ email: text }) }
      //   />
      //   <TextInput
      //     placeholder="Password"
      //     style={styles.input}
      //     autoCapitalize="none"
      //     secureTextEntry={true}
      //     onChangeText={ text => this.setState({ password: text }) }
      //   />
      //   <TouchableOpacity onPress={this.onLogin}>
      //     <View style={styles.loginButton}>
      //       {
      //         this.props.loading
      //           ? <ActivityIndicator />
      //           : <Text style={styles.loginText}>Login</Text>
      //       }
      //     </View>
      //   </TouchableOpacity> */}
      // </KeyboardAvoidingView>
    )
  }
}

const mapState = state => ({
  loading: state.auth.loading,
  musics:state.music.data
})

// const mapDispatch = dispatch => ({
//   signIn: credential => dispatch(login(credential))
//   signUp: () => dispatch(signUp())
// })

const mapDispatch = {
  signIn: login,
  fetchMusic: music
}

export default connect(mapState, mapDispatch)(LoginScreen)
