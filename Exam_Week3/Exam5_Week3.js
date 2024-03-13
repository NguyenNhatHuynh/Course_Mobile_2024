import React from 'react';
import { StyleSheet, Text, View, TextInput, Touchable, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function Exam5_Week3() {
    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Text style={styles.text}>Username: </Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.block}>
                <Text style={styles.text}>Password: </Text>
                <TextInput style={styles.input} />
            </View>

            <View>
                <TouchableOpacity style={styles.button}
                    onPress={() => alert('Đăng Nhập Thành Công')}>
                    <Text style={styles.text1}>Login</Text>
                </TouchableOpacity>
            </View >

            <Image source={{ uri: 'https://androidexample365.com/content/images/2019/11/GoogleSignInLight.png' }}
                style={styles.image}
            />

            {/* <Image
                style={styles.images}
                source={require('../public/images/signinwithgoogle.png')}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    },
    text1: {
        fontSize: 20,
        color: 'white',
    },
    input: {
        height: 30,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 150,
    },
    button: {
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: '#0057d8',
        padding: 15,
        width: 150,
        borderRadius: 10
    },
    image: {
        width: 400,
        height: 200,
    },
    block: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    images: {
        width: 300,
    }
});
