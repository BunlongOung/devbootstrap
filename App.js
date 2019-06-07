import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { createStackNavigator, createAppContainer } from "react-navigation"
import createStore from './src/redux/store'

import ScreenLoading from './src/screens/ScreenLoading/ScreenLoading'
import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import DetailScreen from './src/screens/DetailScreen/DetailScreen'

const AppNavigator = createStackNavigator({
  Loading: {
    screen: ScreenLoading  
  },
  Home: { 
    screen: HomeScreen 
  },
  Detail: {
    screen: DetailScreen
  },
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