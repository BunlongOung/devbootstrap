import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import SplashScreen from '../../redux/reducers/SplashScreen';

class HomeScreen extends Component {
  static navigationOptions() {
    return {
      header: null
    }
  }

  render() {
    return (

        <View style={styles.container}>
          <View style={styles.showContent}>
            <View>
              
            {
              this.props.recipes.map((recipe,index) =>(
                
                  <View key={index} style={flexDirection= 'row'} >
                    
                    <Text>{`${index + 1}. ${recipe.title}`}</Text>
                    <Text>{recipe.ingredient}</Text>
                    
                    <TouchableOpacity>
                      <Text>Save Recipe</Text>
                    </TouchableOpacity>  
                  </View>
               
              ))
            }
            
            </View>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  showContent: {
    flex: 1,
    flexDirection: 'row',
  },

  // box: {
  //   borderColor: 'black',
  //   borderWidth: '100%',
  //   alignItems: 'center',
  //   justifyContent:'center',
  //   color: 'black'
  // }
})

const mapState = state => ({
  recipes: state.recipes.data
})

export default connect (mapState)(HomeScreen)


