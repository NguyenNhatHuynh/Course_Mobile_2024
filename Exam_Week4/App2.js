import { Text, StyleSheet, View } from 'react-native'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'

let App2 = () => {
    const [mau, setMau] = useState('white');
    const mauNgauNhien = () => {
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);

        return `rgb(${red}, ${green}, ${blue})`;
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={() => setMau(mauNgauNhien())}>
                <Text style={styles.text1}>Đổi Màu</Text>
            </TouchableOpacity>

            <View style={[styles.bi, { backgroundColor: mau }]}></View>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 50
    },
    text1: {
        fontSize: 25,
        color: 'white'
    },
    btn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 150,
        marginTop: 10,
        backgroundColor: '#0057D8',
        borderWidth: 2,
    },
    bi: {
        width: 200,
        height: 200,
        marginVertical: 20,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'blue',

    }
})

export default App2;