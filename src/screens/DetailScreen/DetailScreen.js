import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity,
  ScrollView, 
} from 'react-native'
import axios from 'axios'
import { connect } from 'react-redux'
import { breweryData } from '../../redux/actions/brewery'


class DetailScreen extends Component {
  static navigationOptions() {
    return {
      header: null
    }
  }

  render() {
    const brewery = this.props.navigation.getParam('brewery')

    return (
      <View style={{flex: 1}}>
          <View>
            <Text style={styles.headerText}>Brewery Details</Text>
          </View>
        <ScrollView style={{padding: 10}}>
          <View style={styles.viewBox}>
            <Text style={styles.textBox}>{`🍺 ${brewery.name}`}</Text>
            <Text style={styles.textDetails}>Brewery:  {`${brewery.brewery_type}`}</Text>
            <Text style={styles.textDetails}>City:          {`${brewery.city}`}</Text>
            <Text style={styles.textDetails}>State:       {`${brewery.state}`}</Text>
            <Text style={styles.textDetails}>Country:  {`${brewery.country}`}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  headerText: {
    fontSize: 45, 
    backgroundColor: '#000000', 
    padding: 18, 
    color: 'white',
    alignItems: 'center',
    paddingTop: 80,
    shadowColor: 'red',
    shadowOpacity: 10,
    shadowOffset: {width: 0, height: 2},
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10
  },
  viewBox: { 
    backgroundColor: '#795F4B', 
    borderRadius: 10, 
    paddingTop: 35, 
    paddingLeft: 10 
  },
  textBox: {
    fontSize: 25, 
    color: 'white', 
    margin: 30
  },
  textDetails: {
    fontSize: 20, 
    color: 'white',
    margin: 5
  }
})

const mapState = state => ({
  breweries: state.brewery.data
})

export default connect(mapState)(DetailScreen)