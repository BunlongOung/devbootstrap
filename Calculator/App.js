import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,TouchableOpacity,TextInput} from 'react-native';

export default class App extends Component{

  state ={
    text:''
  }
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{padding:20}}>
          <TextInput style={{padding:20}}></TextInput>
        </View>
        <View style={{flex:1,}}>
          <TouchableOpacity><Text>1</Text></TouchableOpacity>
          <TouchableOpacity><Text>2</Text></TouchableOpacity>
          <TouchableOpacity><Text>3</Text></TouchableOpacity>
          <TouchableOpacity><Text>4</Text></TouchableOpacity>   
          <TouchableOpacity><Text>5</Text></TouchableOpacity>
          <TouchableOpacity><Text>6</Text></TouchableOpacity>
          <TouchableOpacity><Text>7</Text></TouchableOpacity>
          <TouchableOpacity><Text>8</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  touch: {
    textAlign: 'center',
    padding:10
  },
});
