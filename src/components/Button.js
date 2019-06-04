import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Button = props => (
  <TouchableOpacity style={styles.button} onPress={ () => props.onPress(props.text) }>
    <View>
      <Text>
        { props.text }
      </Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray'
  }
})

export default Button