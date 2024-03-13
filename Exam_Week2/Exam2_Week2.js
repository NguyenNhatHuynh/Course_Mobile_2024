import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Exam2_Week2() {

    var countSoLe = 0;

    const hamCountSoLe = (numberOne, numberTwo) => {
        for (var i = numberOne; i <= numberTwo; i++) {
            if (i % 2 != 0) {
                countSoLe++;
            }
        }
        return countSoLe;
    }

    let totalSole = hamCountSoLe(50, 100);
    console.log(`Số lẻ trong khoảng 50 đến 100 là ${totalSole}`);
    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        display: 'flex',
        alignItems: 'center'

    },



});
