import React from 'react'
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { createStackNavigator, createAppContainer } from "react-navigation"
import createStore from './src/redux/store'
import Detail from './src/screens/Detail/detail'
import HomeScreen from './src/screens/HomeScreen/HomeScreen'

const AppNavigator = createStackNavigator({ 
  Home: { screen: HomeScreen },
  Detail: {screen: Detail}
})

const Navigation = createAppContainer(AppNavigator)
const store = createStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle='light-content'/>
        <Navigation />
      </Provider>
    );
  }
}