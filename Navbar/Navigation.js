import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native'
import XoanDevHome from '../All_Week/XoanDevHome';
import Exam1_Week1 from '../Exam_Week1/Exam1_Week1';

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='XoanDevHome'>
                <Stack.Screen name='XoanDevHome' component={XoanDevHome} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation