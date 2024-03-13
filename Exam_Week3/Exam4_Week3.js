import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';

export default function Exam4_Week3() {
    let dataColor = [
        { id: 1, mau: 'Đỏ' },
        { id: 2, mau: 'Cam' },
        { id: 3, mau: 'Vàng' },
        { id: 4, mau: 'Lục' },
        { id: 5, mau: 'Lam' },
        { id: 6, mau: 'Chàm' },
        { id: 7, mau: 'Tím' },
    ]
    console.log(dataColor);
    return (
        <View style={styles.container}>
            <FlatList
                data={dataColor}
                renderItem={({ item }) =>
                    <View style={styles.blockItem}>
                        <View style={styles.check}></View>
                        <Text style={styles.text}>{item.mau}</Text>
                    </View>
                }
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    blockItem: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
        width: 350,
        height: 45,
        borderRadius: 5,
        marginTop: 10,

        display: 'flex',
        justifyContent: '',
        flexDirection: 'row',
        alignItems: 'center',
    },
    check: {
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        width: 20,
        height: 20,
        borderRadius: 50,
        marginHorizontal: 10,
        marginBottom: 10

    },
    text: {
        fontSize: 18,
        marginHorizontal: 120
    }

});
