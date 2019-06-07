import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native'

class HomeScreen extends Component {
  static navigationOptions() {
    return {
      header: null
    }
  }
  
  render() {
    return (

      <View >
        <StatusBar barStyle="light-content"/>
        <View >
        <Image 
          source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/41j7-7yboXL.jpg'}}
          style={{
            width:400, 
            height:700,
          }} 
        />
        </View>
        <TouchableOpacity
          style={{
            width: 200,
            padding: 15,
            borderRadius: 5,
            margin: 15,
            alignItems: 'center',
            backgroundColor: '#800000',
            marginLeft:80,
            marginTop: 20
          }}>
          <View >
            <Text
            style={{
              textAlign:'center',
              padding:'30',
              color:'black',
              fontSize:25
            }}>Show Album</Text>
          </View>
        </TouchableOpacity>
    </View>
    )
  }
}
 


export default HomeScreen
