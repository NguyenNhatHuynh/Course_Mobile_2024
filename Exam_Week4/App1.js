import { Text, StyleSheet, View } from 'react-native'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'

let App1 = () => {
    const [nhietdo, setNhietdo] = useState(25);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{nhietdo}</Text>
            <TouchableOpacity style={styles.btn} onPress={() => setNhietdo(nhietdo + 1)}>
                <Text style={styles.text1}>Tăng + </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn1} onPress={() => setNhietdo(nhietdo - 1)}>
                <Text style={styles.text1}>Giảm - </Text>
            </TouchableOpacity>
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
    btn1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 150,
        marginTop: 10,
        backgroundColor: 'red',
        borderWidth: 2,

    }
})

export default App1;