import React from 'react'
import { Text, View } from 'react-native'

const BoldText = props => (
  <Text style={{ fontWeight: 'bold' }}>
    { props.children }
  </Text>
)

const LargeText = props => {
  return (
    <Text style={{ fontSize: 25 }}>
      { props.children }
    </Text>
  )
}

export default BoldText
export { BoldText, LargeText }