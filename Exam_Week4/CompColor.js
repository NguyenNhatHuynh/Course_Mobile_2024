import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function CompColor(props) {
    return (
        <View style={styles.container}>
            <View style={props.itemBlock}>
                <Text style={props.texts}>
                    {props.ten}
                </Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },


});



