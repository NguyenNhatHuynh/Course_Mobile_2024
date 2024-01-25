import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>


            {/* BAI TAP 2 TUAN 1 */}

            <View style={styles.do}>
                <Text style={styles.text}>Đỏ</Text>
            </View>

            <View style={styles.cam}>
                <Text style={styles.text}>Cam</Text>
            </View>


            <View style={styles.vang}>
                <Text style={styles.text}>Vàng</Text>
            </View>


            <View style={styles.luc}>
                <Text style={styles.text}>Lục</Text>
            </View>

            <View style={styles.lam}>
                <Text style={styles.text}>Lam</Text>
            </View>

            <View style={styles.cham}>
                <Text style={styles.text}>Cham</Text>
            </View>

            <View style={styles.tim}>
                <Text style={styles.text}>Tím</Text>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },





    // BAI TAP 2 TUAN 1

    do: {
        backgroundColor: 'red',
        width: 'auto',
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cam: {
        backgroundColor: 'orange',
        width: 'auto',
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    vang: {
        backgroundColor: 'yellow',
        width: 'auto',
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    luc: {
        backgroundColor: '#008000',
        width: 'auto',
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lam: {
        backgroundColor: '#0000ff',
        width: 'auto',
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cham: {
        backgroundColor: '#4a0082',
        width: 'auto',
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tim: {
        backgroundColor: '#800080',
        width: 'auto',
        height: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
    },

});
