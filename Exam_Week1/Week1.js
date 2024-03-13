import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native'

import Exam2_Week1 from './Exam2_Week1';
import Exam3_Week1 from './Exam3_Week1';
import Exam1_Week1 from './Exam1_Week1';


const Stack = createNativeStackNavigator();

export default function Week1(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Exam2_Week1')} style={styles.btn}>
                <Text style={styles.txt}>Bài Tập 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Exam2_Week1')} style={styles.btn}>
                <Text style={styles.txt}>Bài Tập 2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Exam3_Week1')} style={styles.btn}>
                <Text style={styles.txt}>Bài Tập 3</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginTop: 30,
        flexDirection: 'column',
    },

});



