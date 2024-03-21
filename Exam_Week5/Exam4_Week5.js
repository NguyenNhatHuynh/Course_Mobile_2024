import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import HomeScreen from './HomeScreen';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Exam4_Week5() {

    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="ScreenOne" component={ScreenOne} />
            <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
        </Tab.Navigator>
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

