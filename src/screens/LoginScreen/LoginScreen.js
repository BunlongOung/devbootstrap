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
import { musicData } from '../../redux/actions/music'

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: "",
    password: ""
  }

  componentDidMount(){
    this.props.fetchMusicData()
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
    console.log(this.props.musics)
    return (
      // <KeyboardAvoidingView style={styles.container} behavior="padding">
      //   <StatusBar barStyle="light-content"/>
      <View>
        {
          this.props.musics.map((music, index) => (
            <View style={styles.header} key={index}>
              <Text style={styles.headerText}>{ `${index + 1}. ${music.title}` }</Text>
              <Text>{ music.artist }</Text>
            </View>
          ))
        }
      </View>
      // </KeyboardAvoidingView>
    )
  }
}

const mapState = state => ({
  loading: state.auth.loading,
  musics: state.music.data
})

// const mapDispatch = dispatch => ({
//   signIn: credential => dispatch(login(credential))
//   signUp: () => dispatch(signUp())
// })

const mapDispatch = {
  signIn: login,
  fetchMusicData: musicData
}

export default connect(mapState, mapDispatch)(LoginScreen)
