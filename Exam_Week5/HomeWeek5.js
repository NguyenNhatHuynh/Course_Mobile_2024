import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export const HomeWeek5 = () => {
    return (
        <View>
            <Button title='Home Screen' onPress={() => props.navigation.navigate('HomeScreen')} />
        </View>
    )
}
