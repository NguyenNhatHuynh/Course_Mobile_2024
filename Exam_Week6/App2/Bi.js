import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector } from 'react-redux'

export const Bi = () => {
    const mau = useSelector(state => state.mau.value);
    const rgb = () => {
        return `rgb(${mau.do}, ${mau.xanhla}, ${mau.xanhduong})`
    }
    return (
        <View style={[styles.bi, { backgroundColor: rgb() }]}>

        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        display: 'flex',
        marginTop: 30,
        flexDirection: 'column',
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 30
    },

    bi: {
        borderColor: 'black',
        borderWidth: 2,
        width: 200,
        height: 200,
        borderRadius: 50
    }

});


