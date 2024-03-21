import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import HomeScreen from './HomeScreen';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

export default function Exam3_Week5() {

    return (
        // <NavigationContainer>
        //     <Stack.Navigator>
        //         <Stack.Screen name="Home" component={HomeScreen} />
        //     </Stack.Navigator>
        // </NavigationContainer>

        <HomeScreen />
    )
}



const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

