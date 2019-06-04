import React from 'react'
import {View, StyleSheet, TouchableOpacity, Text,TextInput,StatusBar} from 'react-native'
import { whileStatement } from '@babel/types';
export default class HomeScreen extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="light-content" />
                <View style={styles.row}>
                    <Text style={styles.facebook}>Facebook</Text>
                    <TextInput style={styles.text} placeholder="Username" />
                    <TextInput style={styles.text} placeholder="Password" />
                    <TouchableOpacity>
                        <Text style={styles.button}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
    },
    row: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {

        backgroundColor: 'white',
        marginTop: 40,
        borderColor: 'black',
        borderRadius: 5,
        width: 300,
        height:50,
        fontSize:20,
        paddingLeft: 20 
    },
    facebook: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'white',
        color: 'white',
        padding: 10,
        marginTop: 20,
        width: 300,
        height:50,
        fontSize:20,
        borderRadius: 5,
        textAlign: 'center', 
      }
})