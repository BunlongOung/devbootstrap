import React from 'react'
import { Provider } from 'react-redux'
import { createStackNavigator, createAppContainer } from "react-navigation"
import HomeScreen from './src/screens/HomeScreen/HomeScreen'
import LoginScreen from './src/screens/LoginScreen/LoginScreen'
import createStore from './src/redux/store'

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  },
})

const Navigation = createAppContainer(AppNavigator)
const store = createStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}