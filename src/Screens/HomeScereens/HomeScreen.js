import React from 'react'
import {View, StyleSheet, TouchableOpacity, Text,TextInput,StatusBar} from 'react-native'

export default class HomeScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.row}>
          <Text style={styles.facebook}>Facebook</Text>
          <TextInput
            style={styles.text}
            placeholder="Username"
          />
          <TextInput
            secureTextEntry={true}
            style={styles.text}
            placeholder="Password"
          />
          <TouchableOpacity>
            <View style={styles.button}> 
            <Text style={styles.login} >Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    backgroundColor: 'white',
    marginTop: 40,
    borderColor: 'black',
    borderRadius: 5,
    width: 300,
    height:50,
    fontSize:20,
    paddingLeft: 20 
  },
  facebook: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
    padding: 10,
    marginTop: 20,
    width: 300,
    height:50,
    borderRadius: 5,
  },
  login:{
    textAlign: 'center', 
    fontSize:20,
    color: 'white',
  }
})