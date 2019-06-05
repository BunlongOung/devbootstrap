import React from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'

export default class lifeCycle extends React.Component{
    state= {
         count: 0
    }
    render(){
        return(
            <View>
                <View>
                    <Text style={styles.text}>Count: {}</Text>
                </View>
                <TouchableOpacity>
                    <View>
                        <Text>Execute</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})