import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { NavigationContainer, Navigator, Tab } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function XoanDevHome(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Weekn', { screen: 'Weekn' })} style={styles.btn}>
                <Text style={styles.txt}>Bài Tập Tuần 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Week2')} style={styles.btn}>
                <Text style={styles.txt}>Bài Tập Tuần 2</Text>
            </TouchableOpacity>
        </View>

        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Text>Home Screen</Text>
        //     <Button
        //         title="Go to Details"
        //         onPress={() => navigation.navigate('Weekn')}
        //     />
        // </View>
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
        marginVertical: 8
    },
    txt: {
        fontSize: 20,
        color: 'white'
    }
})