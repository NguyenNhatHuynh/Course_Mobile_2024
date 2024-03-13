import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export default function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.navigation.navigate('ScreenOne')} style={styles.btn}>
                <Text style={styles.txt}>Screen One</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('ScreenTwo')} style={styles.btn}>
                <Text style={styles.txt}>Screen Two</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: "#0081f1",
        height: 50,
        width: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8
    },
    txt: {
        fontSize: 20,
        color: 'white'
    }
})