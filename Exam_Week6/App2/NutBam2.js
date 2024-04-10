import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { tangDo, giamDo, tangXanhduong, giamXanhduong, tangXanhla, giamXanhla } from './mauSlide';

export const NutBam2 = (props) => {
    return (
        <View>
            <Button title={`Tăng ${props.mau}`} onPress={() => dispatch(tangDo())} />
            <Button title={`Giảm ${props.mau}`} onPress={() => dispatch(giamDo())} />
            <Button title={`Tăng ${props.mau}`} onPress={() => dispatch(tangXanhla())} />
            <Button title={`Giảm ${props.mau}`} onPress={() => dispatch(giamXanhla())} />
            <Button title={`Tăng ${props.mau}`} onPress={() => dispatch(tangXanhduong())} />
            <Button title={`Giảm ${props.mau}`} onPress={() => dispatch(giamXanhduong())} />
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

