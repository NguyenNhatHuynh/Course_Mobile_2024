import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeWeek2(props) {
    return (
        <View>
            <Button title='Bài Tập 1' onPress={() => props.navigation.navigate('Exam1_Week2')} />
            <Button title='Bài Tập 2' onPress={() => props.navigation.navigate('Exam2_Week2')} />
            <Button title='Bài Tập 3 - Check Logic' onPress={() => props.navigation.navigate('Exam3_Week3')} />
            <Button title='Bài Tập 4' onPress={() => props.navigation.navigate('Exam3_Week4')} />
            <Button title='Bài Tập 5' onPress={() => props.navigation.navigate('Exam3_Week5')} />
            <Button title='Bài Tập 6 - Run Web' onPress={() => props.navigation.navigate('Exam3_Week6')} />
            <Button title='Bài Tập 7 - Run Web' onPress={() => props.navigation.navigate('Exam3_Week7')} />
        </View>
    )
}

