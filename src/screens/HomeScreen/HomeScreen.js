import React, { Component } from 'react'
import axios from 'axios'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'

export default class HomeScreen extends Component {
  state = {
    count: 0
  }

  onIncreasement = () => {
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Count = { this.state.count }</Text>
        </View>
        <TouchableOpacity onPress={this.onIncreasement}>
          <View style={styles.button}>
           <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {
    width: 100,
    padding: 15,
    borderRadius: 5,
    margin: 15,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
})
