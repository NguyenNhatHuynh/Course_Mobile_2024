import React from 'react'
import { useDispatch } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native';
import store from './store'; // Import Redux store vào component
// import { tangDo, giamDo, tangXanhduong, giamXanhduong, tangXanhla, giamXanhla } from './mauSlide';
import { tang, giam } from './mauSlide';

export const NutBam2 = (props) => {
    const dispatch = useDispatch();
    return (
        <View>
            <Button title={`Tăng ${props.mau}`} onPress={() => dispatch(tang())} />
            <Button title={`Giảm ${props.mau}`} onPress={() => dispatch(giam())} />
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

