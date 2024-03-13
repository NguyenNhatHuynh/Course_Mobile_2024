import React from 'react';
import { StyleSheet, Text, View, Image, props } from 'react-native';
import Status from './Status';

export default function Exam1_Week4() {
    return (
        <View style={styles.container}>
            <Status sta='Status' inf='Số like - Số Tim' imageUri='../public/images/profile1.jpg' />
            <Status sta='Status' inf='Số like - Số Tim' imageUri='../public/images/profile1.jpg' />
            <Status sta='Status' inf='Số like - Số Tim' imageUri='../public/images/profile1.jpg' />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginTop: 30,
        flexDirection: 'column',
    },

});



