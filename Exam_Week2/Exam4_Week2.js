import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Exam4_Week2() {

    return (
        <View style={styles.view}>
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
                <Text style={styles.text}>Chàm</Text>
            </View>
            <View style={styles.tim}>
                <Text style={styles.text}>Tím</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text: {
        fontSize: 35,
        textAlign: 'center'
    },
    do: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cam: {
        flex: 1,
        backgroundColor: '#ffa500',
        justifyContent: 'center',
        alignItems: 'center'
    },
    vang: {
        flex: 1,
        backgroundColor: '#ffff00',
        justifyContent: 'center',
        alignItems: 'center'
    },
    luc: {
        flex: 1,
        backgroundColor: '#008000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lam: {
        flex: 1,
        backgroundColor: '#0000FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cham: {
        flex: 1,
        backgroundColor: '#4A0082',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tim: {
        flex: 1,
        backgroundColor: '#800080',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
