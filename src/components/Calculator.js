import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Button from './Button'

export default class Calculator extends Component {
  state = {
    text: "0"
  }

  onButtonPress = value => {
    const { text } = this.state
    let newText = text
    if (text === "0") {
      newText = newText.substr(0, newText.length - 1)
      newText += value
    }
    else if (value === 'c') {
      newText = newText.substr(0, newText.length - 1)
    } else if (value === '.') {
      if (!newText.includes(".")) {
        newText += value
      }
    }
    else {
      newText += value
    }
    this.setState({ text: newText })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.display}>
          <Text style={styles.displayText}>{this.state.text}</Text>
        </View>
        <View style={styles.control}>
          <View style={styles.row}>
            <Button
              text='7'
              onPress={this.onButtonPress}
            />
            <Button
              text='8'
              onPress={this.onButtonPress}
            />
            <Button
              text='9'
              onPress={this.onButtonPress}
            />
            <Button
              text='/'
              onPress={this.onButtonPress}
            />
          </View>

          <View style={styles.row}>
            <Button
              text='4'
              onPress={this.onButtonPress}
            />
            <Button
              text='5'
              onPress={this.onButtonPress}
            />
            <Button
              text='6'
              onPress={this.onButtonPress}
            />
            <Button
              text='*'
              onPress={this.onButtonPress}
            />
          </View>

          <View style={styles.row}>
            <Button
              text='1'
              onPress={this.onButtonPress}
            />
            <Button
              text='2'
              onPress={this.onButtonPress}
            />
            <Button
              text='3'
              onPress={this.onButtonPress}
            />
            <Button
              text='-'
              onPress={this.onButtonPress}
            />
          </View>

          <View style={styles.row}>
            <Button
              text='0'
              onPress={this.onButtonPress}
            />
            <Button
              text='.'
              onPress={this.onButtonPress}
            />
            <Button
              text='c'
              onPress={this.onButtonPress}
            />
            <Button
              text='+'
              onPress={this.onButtonPress}
            />
          </View>

          <View style={styles.row}>
            <Button
              text='='
              onPress={this.onButtonPress}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  display: {
    flex: 1,
    backgroundColor: '#dedede',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20
  },
  displayText: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  control: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  }
})
