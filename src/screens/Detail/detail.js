import React, { Component } from 'react'
import { View, Text, Linking, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native'
import { product } from '../../redux/actions/product'
import { connect } from 'react-redux'
// import console = require('console');

class Detail extends Component {
  static navigationOptions() {
    return {
      headerStyle: {
        backgroundColor: 'black',
      }

    }
  }
  render() {
    const product = this.props.navigation.getParam('product')
    console.log(product)
    return (
      <ImageBackground source={require('../../images/bg.jpg')} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <Text style={styles.title}>Detail Information</Text>

          <View style={styles.column} >
            <View style={styles.row} >
              <Text style={styles.text}>{product.title}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Title</Text>
            </View>
          </View>

          <View style={styles.column} >
            <View style={styles.row} >
              <Text style={styles.text}>{product.artist}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Artist</Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => Linking.openURL(product.url)}>
            <View style={styles.column} >

              <View style={styles.rows} >
                <Text style={styles.button}>Click here</Text>

              </View>
              <View style={styles.row}>
                <Text style={styles.text}>Info</Text>
              </View>

            </View>
          </TouchableOpacity>

          <View>
            <Image
              style={styles.img}
              source={{ url: `${product.image}` }}
            />
          </View>
        </View>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    // color: 'white',
    marginBottom: 30
  },
  container: {
    flex: 1,
    // backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  column: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
  },
  row: {
    width: 180,
    height: 40
  },
  rows: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
    backgroundColor: '#3c745b',
    borderRadius: 5,
    width: 180,
    height: 40
  },
  text: {
    fontSize: 20,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 5
  },
  button: {
    fontSize: 20,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 5,
    backgroundColor: '#3c745b'
  },
  img: {
    width: 375,
    height: 400,
    marginTop: 50
  }
})

const mapState = state => ({
  product: state.product.data
})
const mapDispatch = {
  getProducts: product
}

export default connect(mapState, mapDispatch)(Detail)