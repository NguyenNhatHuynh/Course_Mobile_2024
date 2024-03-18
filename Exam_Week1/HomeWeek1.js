import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeWeek1(props) {
    return (
        <View>
            <Button title='Bài Tập 1' onPress={() => props.navigation.navigate('Exam1_Week1')} />
            <Button title='Bài Tập 2' onPress={() => props.navigation.navigate('Exam2_Week1')} />
            <Button title='Bài Tập 3' onPress={() => props.navigation.navigate('Exam3_Week1')} />
        </View>
    )
}

