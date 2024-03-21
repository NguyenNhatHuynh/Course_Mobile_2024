import React, { useState } from 'react'
import { StyleSheet, TextInput, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';


const Exam2_Week5 = () => {
    const [food, setFood] = useState('');
    const [listFoods, setListFood] = useState([]);

    const addFood = () => {
        setListFood([...listFoods, food]);
        setFood('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setFood(text)}
                value={food}
            />
            <TouchableOpacity style={styles.btn} onPress={() => { addFood() }}>
                <Text style={{ fontSize: 20, color: 'white' }}>Add Food</Text>
            </TouchableOpacity>
            <View style={styles.list}>
                {listFoods.map((fooditem) => (
                    <Text key={fooditem} style={styles.item}>{fooditem}</Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
    },
    list: {
        marginTop: 20,
    },
    item: {
        fontSize: 18,
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 5,
        margin: 5,
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
        marginHorizontal: 85,
        marginVertical: 20

    },
});

export default Exam2_Week5;

