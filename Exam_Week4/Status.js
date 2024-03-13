import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


let Status = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Image style={styles.imga} source={require('../public/images/profile1.jpg')} />

                <View style={styles.information}>
                    <Text style={styles.text}>{props.sta}</Text>
                    <Text style={styles.text}>{props.inf}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginTop: 10,
        flexDirection: 'column',
        marginHorizontal: 15
    },
    item: {
        marginVertical: 10
    },
    imga: {
        width: 100,
        height: 100
    },
    Imag: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    },
    information: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    text: {
        fontSize: 20
    }

});

export default Status;


