import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Exam2_Week1() {
    return (
        <View style={styles.container}>

            {/* BAI TAP 3 TUAN 1 */}
            <View style={styles.fatherBox}>

            </View>

            <View styles={styles.cn}>

                <View style={styles.father}>
                    <View style={styles.checkbox}></View>
                    <Text style={styles.text}>Họ và tên: Nguyễn Nhật Huỳnh</Text>
                </View>

                <View style={styles.father}>
                    <View style={styles.checkbox}></View>
                    <Text style={styles.text}>Tuổi: 25</Text>
                </View>

                <View style={styles.father}>
                    <View style={styles.checkbox}></View>
                    <Text style={styles.text}>Nghề nghiệp: Sinh viên</Text>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        display: 'flex',
        alignItems: 'center'

    },


    // BAI TAP 3 TUAN 1
    fatherBox: {
        width: 150,
        height: 150,
        backgroundColor: 'grey',
        marginBottom: 10
    },

    father: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        color: 'black',
        textAlign: 'center',
        fontSize: 17,

    },

    checkbox: {
        height: 15,
        width: 15,
        backgroundColor: 'red',
        marginHorizontal: 5,
        borderRadius: 50
    }
});
