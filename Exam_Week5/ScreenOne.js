import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScreenOne() {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>Screen One</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    text: {
        fontSize: 30,
        marginTop: 30,
        color: 'green'
    }
})