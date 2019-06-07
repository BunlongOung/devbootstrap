import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput,ImageBackground } from 'react-native'

class HomeScreen extends Component {
  static navigationOptions() {
    return {
      header: null
    }
  }

  render() {
    return (
    <ImageBackground source={require('../../images/bg.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Category of Product</Text>
        </View>
        <View style={styles.column}>
          <View style={styles.row}>
            <Text style={styles.text}>Cloth</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>1</Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.row}>
            <Text style={styles.text}>Beer</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>2</Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.row}>
            <Text style={styles.text}>Keyboard</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.row}>
            <Text style={styles.text}>Text</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>4</Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.row}>
            <Text style={styles.text}>Computer</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>5</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    color: 'white',
    marginBottom: 30
  },
  column: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
  },
  row: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
    backgroundColor:'#3c745b',
    borderRadius: 5,
    width: 170,
    height: 40
  },
  text: {
    fontSize: 20,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    paddingTop: 5
  }
})

export default HomeScreen