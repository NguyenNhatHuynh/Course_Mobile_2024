import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeWeek5(props) {
    return (
        <View>
            <Button title='Bài Tập 1' onPress={() => props.navigation.navigate('Exam1_Week5')} />
            <Button title='Bài Tập 2' onPress={() => props.navigation.navigate('Exam2_Week5')} />
        </View>
    )
}
