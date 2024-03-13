import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CompColor from './CompColor';

export default function Exam2_Week4() {
    return (
        <View style={styles.container}>
            <CompColor ten='Đỏ'
                texts={{
                    fontSize: 25,
                    textAlign: 'center'
                }}
                itemBlock={{
                    backgroundColor: 'red',
                    height: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} />

            <CompColor ten='Cam'
                texts={{
                    fontSize: 25,
                    textAlign: 'center'
                }}
                itemBlock={{
                    backgroundColor: '#FFA500',
                    height: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} />

            <CompColor ten='Vàng'
                texts={{
                    fontSize: 25,
                    textAlign: 'center'
                }}
                itemBlock={{
                    backgroundColor: '#FFFF00',
                    height: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} />

            <CompColor ten='Lục'
                texts={{
                    fontSize: 25,
                    textAlign: 'center'
                }}
                itemBlock={{
                    backgroundColor: '#0010000',
                    height: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} />
            <CompColor ten='Lam'
                texts={{
                    fontSize: 25,
                    textAlign: 'center'
                }}
                itemBlock={{
                    backgroundColor: '#0000FF',
                    height: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} />
            <CompColor ten='Chàm'
                texts={{
                    fontSize: 25,
                    textAlign: 'center'
                }}
                itemBlock={{
                    backgroundColor: '#4A0082',
                    height: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} />
            <CompColor ten='Tím'
                texts={{
                    fontSize: 25,
                    textAlign: 'center'
                }}
                itemBlock={{
                    backgroundColor: '#800080',
                    height: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} />


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },

});



