import React, { Component } from 'react'
import { View, TextInput,Text,StyleSheet,TouchableOpacity,StatusBar} from 'react-native'

class HomeScreen extends Component {
  render() {
    return (
       <View style = {styles.container}>
          <StatusBar  barStyle="light-content"/>
          <Text style={styles.text}>Facebook</Text>

          <TextInput style={styles.input} placeholder = "Email"/>

          <TextInput style={styles.input} placeholder = "Password"/>
          <TouchableOpacity>
            <View style={styles.controll_button}>
              <Text style={styles.text_button}>Login</Text>
            </View>
          </TouchableOpacity>
       </View>
      )
   }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'blue',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text:{
    color:'#fff',
    fontSize:40,
    fontWeight:'bold',
  },
  controll_button:{
    margin: 15,
    height: 50,
    width:300,
    borderRadius:6,
    borderColor: 'white',
    borderWidth: 1
  },
  text_button:{
    marginTop:10,
    textAlign:'center',
    fontSize:25,
    color:'white'
  },
  input: {
    backgroundColor:'#fff',
    padding:9,
    margin: 15,
    height: 50,
    width:300,
    borderRadius: 6,
    borderColor: 'white',
    borderWidth: 1,
    fontSize: 17
  },
 })
export default HomeScreen;