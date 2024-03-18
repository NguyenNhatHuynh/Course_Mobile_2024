import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';

export default function Exam2_Week5() {
    const soNgauNhien = () => {
        Math.floor(Math.random() * 100).toString();
    }
    const [mangSo, setMangSo] = useState([]);
    console.log(mangSo);
    return (
        <View style={{ marginTop: 50, flex: 1 }}>
            <TouchableOpacity style={styles.btn} onPress={() => {
                setMangSo([...mangSo, soNgauNhien()]);
            }}>
                <Text style={{ fontSize: 20, color: 'white' }}>Add Number</Text>
            </TouchableOpacity>
            <FlatList
                data={mangSo}
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
        width: 200,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'green',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 100,
    },
    card: {
        width: 280,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        marginHorizontal: 60,
        marginVertical: 30,
        borderRadius: 10,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    }
});

