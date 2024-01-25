import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Exam1_Week2() {

    var tongTwoNumber = 0;

    const tinhSoMu = (a, b) => {
        let x = Math.pow(a, 2);
        let y = Math.pow(b, 2);
        tongTwoNumber = x + y;
        return tongTwoNumber;
    }

    let ketqua = tinhSoMu(4, 4);

    console.log(`Kết quả của a^2 + b^2 là ${ketqua}`);
    
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
