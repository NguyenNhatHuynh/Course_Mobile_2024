import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { Bi } from './Bi';
import { NutBam2 } from './NutBam2';

export const ManHinhChinh2 = () => {
    return (
        <View>
            <Bi />
            <NutBam2 mau='Đỏ' />
            <NutBam2 mau='Xanh lá' />
            <NutBam2 mau='Xanh dương' />
        </View>
    )
}
