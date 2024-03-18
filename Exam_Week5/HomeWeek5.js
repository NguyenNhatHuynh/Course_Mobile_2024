import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeWeek5(props) {
    return (
        <View>
            <Button title='Bài Tập 1 - Unfinished' onPress={() => props.navigation.navigate('Exam1_Week5')} />
        </View>
    )
}
