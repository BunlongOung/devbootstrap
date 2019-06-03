import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.item}><Text>1</Text></View>
        <View style={styles.item}><Text>2</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  item: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    margin: 5
  }
});
