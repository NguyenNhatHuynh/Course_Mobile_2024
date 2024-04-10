import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector } from 'react-redux';

export const NhietDo = () => {
    const nhietdo = useSelector(state => state.nhietdo.value)
    return (
        <View>
            <Text style={styles.text}>Nhiệt độ: {nhietdo}</Text>
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


