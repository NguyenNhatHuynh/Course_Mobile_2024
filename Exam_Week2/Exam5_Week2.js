import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Exam5_Week2() {

    return (
        <View style={styles.container1}>
            <View style={styles.black}>
                <View style={styles.red}></View>
                <View style={styles.yellow}></View>
                <View style={styles.green}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container1: {
        marginTop: 330,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'

    },

    black: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
        backgroundColor: 'black',
        height: 400,
        padding: 20

    },

    red: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'red',
        borderRadius: 50,
    },
    yellow: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'yellow',
        borderRadius: 50,
        marginVertical: 10,
    },
    green: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'green',
        borderRadius: 50,
    },


});
