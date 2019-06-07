import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import  { breweryData } from '../../redux/actions/brewery'
import axios from 'axios'

class ScreenLoading extends Component {
  static navigationOptions() {
    return {
      header: null
    }
  }
  componentDidMount(){
    this.props.fetchBreweryData()
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.success){
      this.props.navigation.navigate('Home')
    }
  }

  render() {
    return (
      <View style={styles.viewLogo}>
       <Image
        style={styles.image}
        source={require('../../image/brewery.png')}
       />
        <View>
         <ActivityIndicator size="large" color="#9CB226"/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  viewLogo: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
  },
  image: {
    height: 250, 
    width: 250,
    marginBottom: 60
  }
})

const mapState = state => ({
  success: state.brewery.success
})

const mapDispatch = {
  fetchBreweryData: breweryData
}

export default connect(mapState, mapDispatch)(ScreenLoading)