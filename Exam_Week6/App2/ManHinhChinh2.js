import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { Bi } from './Bi';
import { NutBam2 } from './NutBam2';

export const ManHinhChinh2 = () => {
    return (
        <View style={styles.container}>
            <Bi />
            <NutBam2 mau='Đỏ' />
            <NutBam2 mau='Xanh lá' />
            <NutBam2 mau='Xanh dương' />
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

});
