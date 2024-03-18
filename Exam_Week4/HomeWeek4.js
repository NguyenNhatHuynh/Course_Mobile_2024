import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export const HomeWeek4 = () => {
    return (
        <View>
            <Button title='Bài Tập 1' onPress={() => props.navigation.navigate('Exam1_Week4')} />
            <Button title='Bài Tập 2' onPress={() => props.navigation.navigate('Exam2_Week4')} />
            <Button title='Bài Tập 3 - App 1' onPress={() => props.navigation.navigate('Exam3_App1_Week4')} />
            <Button title='Bài Tập 3 - App 2' onPress={() => props.navigation.navigate('Exam3_App2_Week4')} />
        </View>
    )
}
