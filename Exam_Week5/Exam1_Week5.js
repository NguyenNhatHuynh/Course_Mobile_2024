import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';

const soNgauNhien = () => Math.floor(Math.random() * 100).toString();



export default function Exam1_Week5() {


    const [mangSo, setMangSo] = useState([]);

    const themSoNgauNhien = () => {
        const newNumber = soNgauNhien();
        setMangSo([...mangSo, newNumber]);
    };

    const xoaSo = (index) => {
        const newNumbers = [...mangSo];
        newNumbers.splice(index, 1);
        setMangSo(newNumbers);
    };

    const xoaTatCaSo = () => {
        setMangSo([]);
    };
    return (
        <View style={{ marginTop: 50, flex: 1 }}>
            {/* Cach 1 */}
            {/* Button Add Number */}
            {/* <TouchableOpacity style={styles.btn} onPress={() => {
                setMangSo([...mangSo, soNgauNhien()]);
            }}>
                <Text style={{ fontSize: 20, color: 'white' }}>Add Number</Text>
            </TouchableOpacity> */}


            {/* Button Remove Number */}
            {/* <TouchableOpacity style={styles.btn} onPress={() => {
                setMangSo([...mangSo, soNgauNhien()]);
            }}>
                <Text style={{ fontSize: 20, color: 'white' }}>Add Number</Text>
            </TouchableOpacity> */}

            {/* Cach 2: Button Add Number */}
            <TouchableOpacity style={styles.btn} onPress={() => { themSoNgauNhien() }}>
                <Text style={{ fontSize: 20, color: 'white' }}>Add Number</Text>
            </TouchableOpacity>
            {/* Button Remove All Number */}
            <TouchableOpacity style={styles.btn1} onPress={() => { xoaTatCaSo() }}>
                <Text style={{ fontSize: 20, color: 'white' }}>Remove All Number</Text>
            </TouchableOpacity>


            <FlatList
                data={mangSo}
                renderItem={({ item }) =>
                    <View style={styles.card}>
                        <Text style={{ color: 'black', fontSize: 20, marginHorizontal: 120, marginVertical: 8 }}>{item}</Text>
                        <TouchableOpacity style={styles.btn2} onPress={() => { xoaSo() }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>X</Text>
                        </TouchableOpacity>
                    </View>}
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
    btn1: {
        width: 200,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'red',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 100,
        marginVertical: 20
    },
    btn2: {
        width: 30,
        height: 30,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'yellow',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 245,
        marginVertical: -34
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

    },
    text: {
        fontSize: 20
    }
});

