import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NhietDo } from './NhietDo';
import { NutBam } from './NutBam';

export const ManHinhChinh = () => {
    return (
        <View style={styles.container}>
            <NhietDo />
            <NutBam />
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


