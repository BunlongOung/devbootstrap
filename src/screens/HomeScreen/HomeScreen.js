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
import { connect } from 'react-redux'
import axios from 'axios'

class HomeScreen extends Component {
  static navigationOptions() {
    return {
      header: null
    }
  };

  Detail = (brewery) => {
    this.props.navigation.navigate('Detail', { brewery })
  }

  render() {
    console.log(this.props.breweries)
    return (
      <View style={{flex: 1}}>
          <View>
            <Text style={styles.headerText}>Breweries List</Text>
          </View>
        <ScrollView>
          {
            this.props.breweries.map((brewery) => (
              <TouchableOpacity onPress = { () => this.Detail(brewery)}>
                <View style={styles.viewBox}>
                  <Text style={styles.textBox}>{`🍺 ${brewery.name}`}</Text>
                </View>
              </TouchableOpacity>
            ))
          }
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
    padding: 10
  },
  textBox: {
    fontSize: 25, 
    color: 'white', 
    alignItems: 'center', 
    backgroundColor: '#795F4B', 
    borderRadius: 10, 
    height: 100,
    paddingTop: 35, 
    paddingLeft: 23
  }
})

const mapState = state => ({
  breweries: state.brewery.data
})


export default connect(mapState)(HomeScreen)