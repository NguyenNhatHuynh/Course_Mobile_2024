import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export const HomeWeek3 = () => {
    return (
        <View>
            <Button title='Bài Tập 1' onPress={() => props.navigation.navigate('Hello')} />
            <Button title='Bài Tập 2 - Unfinished' onPress={() => props.navigation.navigate('Exam2_Week1')} />
            <Button title='Bài Tập 3' onPress={() => props.navigation.navigate('Exam3_Week3')} />
            <Button title='Bài Tập 4' onPress={() => props.navigation.navigate('Exam4_Week3')} />
            <Button title='Bài Tập 5' onPress={() => props.navigation.navigate('Exam5_Week3')} />
        </View>
    )
}
