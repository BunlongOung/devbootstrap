import React, { Component } from 'react'
import {connect} from 'react-redux'
import { 
  View,
  Image,
  StyleSheet,
  ActivityIndicator
} from 'react-native'
import { fetchRecipe } from '../../actions/SplashScreen';

class SplashScreen extends Component {
  static navigationOptions() {
    return {
      header: null
    }
  }

  componentDidMount(){
    this.props.fetchRecipeData()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.success) {
      this.props.navigation.navigate('HomeScreen')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.stretch} source={require('../../../img/kittys.png')}/>
        <ActivityIndicator styles= {styles.loader} size= 'large'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  stretch: {
    width: 200,
    height: 200
  },

  loader: {
    color: 'black',
    marginTop: 50
  }
})

const mapState = state => ({
  success: state.recipes.success
})

const mapDispatch = {
   fetchRecipeData : fetchRecipe 
}

export default connect (mapState, mapDispatch)(SplashScreen) 

