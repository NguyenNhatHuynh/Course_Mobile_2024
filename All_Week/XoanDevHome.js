import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function XoanDevHome(props) {
    return (
        <View>
            <Button title='Tất Cả Bài Tập Tuần 1' onPress={() => props.navigation.navigate('HomeWeek1')} />
            <Button title='Tất Cả Bài Tập Tuần 2' onPress={() => props.navigation.navigate('HomeWeek2')} />
            <Button title='Tất Cả Bài Tập Tuần 3' onPress={() => props.navigation.navigate('HomeWeek3')} />
            <Button title='Tất Cả Bài Tập Tuần 4' onPress={() => props.navigation.navigate('HomeWeek4')} />
            <Button title='Tất Cả Bài Tập Tuần 5' onPress={() => props.navigation.navigate('HomeWeek5')} />
            <Button title='Tất Cả Bài Tập Tuần 6' onPress={() => props.navigation.navigate('HomeWeek6')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: "#0081f1",
        height: 50,
        width: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8,
    },
    txt: {
        fontSize: 20,
        color: 'white'
    }
})