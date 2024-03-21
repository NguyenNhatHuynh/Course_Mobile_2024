import React, { useState } from 'react'
import { StyleSheet, TextInput, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';


export default function Exam2_Week5() {

    const [textString, setMangFood] = useState([]);
    return (
        <View style={{ marginTop: 50, flex: 1 }}>

            <View style={{ display: 'flex' }}>
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <TouchableOpacity style={styles.btn} onPress={() => {
                    setMangFood([...textString, setMangFood()]);
                }}>
                    <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={textString}
                renderItem={({ item }) =>
                    <View style={styles.card}>
                        <Text style={styles.text}>{item}</Text>
                    </View>}
                keyExtractor={item => item}
            />

        </View>
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
    btn: {
        width: 60,
        height: 60,
        borderColor: 'green',
        borderWidth: 1,
        backgroundColor: 'blue',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',


        marginHorizontal: 285,
        marginVertical: -65
    },
    text: {
        fontSize: 20
    },
    input: {
        height: 50,
        width: 240,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'green'
    }

});

