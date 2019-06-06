import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class HomeScreen extends Component {
  static navigationOptions() {
    return {
      header: null
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 20
  }
})

export default HomeScreen