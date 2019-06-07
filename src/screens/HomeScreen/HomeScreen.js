import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native'
//import { Icon } from 'react-native-elements'

class HomeScreen extends Component {
  static navigationOptions() {
    return {
      header: null
    }
  }
  toPage = () => {
    this.props.navigation.navigate('ShowAlbum')
  }
  render() {
    return (

      <View >
        <StatusBar barStyle="light-content" />
        <View >
          <Image
            source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/41j7-7yboXL.jpg' }}
            style={styles.image} />
        </View>
        <TouchableOpacity
          onPress={this.toPage}
          style={styles.button}>
          <View >
            <Text style={styles.text_button}>Taylor Swift Albums</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 700,

  }, button: {
    width: 250,
    padding: 15,
    borderRadius: 5,
    margin: 15,
    alignItems: 'center',
    backgroundColor: '#800000',
    marginLeft: 60,
    marginTop: 20

  }, text_button: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25
  }
})


export default HomeScreen
