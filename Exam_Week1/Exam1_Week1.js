import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Exam1_Week1() {
    return (
        <View style={styles.container}>

            {/* Thành Viên 2 */}
            <Text style={styles.text}>Họ và tên: Nguyễn Nhật Huỳnh</Text>
            <Text style={styles.text1}>MSSV: 1721030860</Text>
            <Text style={styles.text2}>Ngày sinh: 01/06/2003</Text>
            <Text style={styles.text3}>Lớp: 21DTH3</Text>




            {/* Thành Viên 2 */}
            <Text style={styles.text}>Họ và tên: Panyasak Khamkeuth</Text>
            <Text style={styles.text1}>MSSV: 1721001086</Text>
            <Text style={styles.text2}>Ngày sinh: 01/06/2003</Text>
            <Text style={styles.text3}>Lớp: 21DTH4</Text>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginTop: 30,
    },



    text: {
        color: 'black',
        textAlign: 'center',
        fontSize: 23,
        fontWeight: 'bold'
    },
    text1: {
        color: 'red',
        fontSize: 18,
    },
    text2: {
        color: '#ff65ff',
        fontSize: 18,
    },
    text3: {
        color: 'blue',
        fontWeight: 'bold',
        textAlign: 'right'

    },

});
