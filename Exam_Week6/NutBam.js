import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { tang, giam } from './nhietDoSlide';

export const NutBam = () => {
    const dispatch = useDispatch()
    return (
        <View>
            <Button title="Tăng" onPress={() => dispatch(tang())} />
            <Button title="Giảm" onPress={() => dispatch(giam())} />
        </View>
    )
}
