import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { product } from '../../redux/actions/product'
import { connect } from 'react-redux'
class HomeScreen extends Component {
  static navigationOptions() {
    return {
      header: null
    }
  }
  componentDidMount() {
    this.props.getProducts()
  }
  detail = (product) => {
    this.props.navigation.navigate('Detail', { product })
  }
  render() {
    // console.log(this.props.product)
    return (
      <ImageBackground source={require('../../images/bg.jpg')} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Category of Product</Text>
          </View>
          {
            this.props.product.map((product, index) => (
              <View style={styles.column} key={index}>
                <TouchableOpacity onPress={() => this.detail(product)}>
                  <View style={styles.row}>
                    <Text style={styles.text}>Detail</Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.row} >
                  <Text style={styles.text}>{`${product.title}`}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.text}>{`${index + 1}`}</Text>
                </View>
              </View>
            ))
          }
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    color: 'white',
    marginBottom: 30
  },
  column: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
  },
  row: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
    backgroundColor: '#3c745b',
    borderRadius: 5,
    width: 120,
    height: 40
  },
  text: {
    fontSize: 15,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 5
  }
})

const mapState = state => ({
  product: state.product.data
})
const mapDispatch = {
  getProducts: product
}

export default connect(mapState, mapDispatch)(HomeScreen)


// export default HomeScreen