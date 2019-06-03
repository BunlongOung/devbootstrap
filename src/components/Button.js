import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Button extends Component {
  state = {
    text: "Hello, World!",
    number: 0
  }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     text: "Hello, World!",
  //   }
  // }

  changeText = () => {
    if (this.state.text === 'Hello, World!')
      this.setState({ text: "Hello, my friend!", number: 1 })
    else
      this.setState({ text: "Hello, World!", number: 0 })
  }

  render() {
    const { text, number } = this.state

    return (
      <View>
        <Text>{ text }</Text>
        <Text>{ number }</Text>
        <TouchableOpacity onPress={this.changeText}>
          <View style={{ backgroundColor: 'blue', padding: 20, marginTop: 20 }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>{ this.props.title }</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Button
