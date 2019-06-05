import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#0647a6'
  },
  header: {
    marginBottom: 25
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff'
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'solid',
    width: width - 40,
    margin: 15,
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  loginButton: {
    width: width - 40,
    padding: 15,
    borderRadius: 5,
    margin: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'solid',
  },
  loginText: {
    color: '#fff',
    fontSize: 20,
  }
})