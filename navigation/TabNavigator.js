import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackNavigator } from "../navigation/StackNavigator";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Exam" component={MainStackNavigator} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;