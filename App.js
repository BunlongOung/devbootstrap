import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { createStackNavigator, createAppContainer } from "react-navigation"
import createStore from './src/redux/store'

import SplashScreen from './src/screens/SplashScreen/SplashScreen'
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const AppNavigator = createStackNavigator({
  SplashScreen: { screen: SplashScreen },
  HomeScreen: { screen: HomeScreen }
})

const Navigation = createAppContainer(AppNavigator)
const store = createStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle='dark-content'/>
        <Navigation />
      </Provider>
    );
  }
}