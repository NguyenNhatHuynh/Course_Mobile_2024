import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function DenDo() {

    return (
        <View style={styles.container1}>
            <View style={styles.black}>
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

    green: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'green',
        borderRadius: 50,
    },


});
