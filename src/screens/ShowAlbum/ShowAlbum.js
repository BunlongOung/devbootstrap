import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, WebView, ScrollView, Linking } from 'react-native'
import { musicAlbum } from '../../redux/actions/Album'
class ShowAlbum extends Component {
  static navigationOptions() {
    return {
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  }
  componentDidMount = () => {
    this.props.album();
  }
  render() {
    console.log(this.props)
    return (

      <ScrollView>
        <View style={styles.contrainer}>
          <Text style={styles.title}>Taylor Swift Songs</Text>
          {
            this.props.albums.map((album, index) => (
              <View style={styles.header} key={index}>
                <TouchableOpacity onPress={() => Linking.openURL(album.url)}>
                  <Image
                    style={styles.image}
                    source={{ url: `${album.image}` }}
                  />
                  <Text style={styles.headerText}> {album.title} </Text>
                </TouchableOpacity>
              </View>

            ))
          }
        </View>
      </ScrollView>

    )
  }
}
const mapState = state => ({
  albums: state.album.data
})
const mapDispatch = {
  album: musicAlbum
}
const styles = StyleSheet.create({
  contrainer: {
    paddingBottom: 10

  }, headerText: {
    color: '#800000',
    textAlign: 'center',
    fontSize: 20

  }, header: {
    marginTop: 5,

  }, image: {
    marginTop: 5,
    width: 300,
    height: 230,
    marginLeft: 35,
    borderRadius: 5,

  }, title: {
    padding:10,
    textAlign: 'center',
    color: '#0059b3',
    fontSize: 30,
    fontWeight:'bold'
  }

})
export default connect(mapState, mapDispatch)(ShowAlbum)
