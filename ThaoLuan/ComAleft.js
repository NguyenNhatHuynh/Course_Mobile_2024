import React from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native';

const ShowAleft = () =>
    Alert.alert(
        'Alert Title',
        '',
        [
            {
                text: 'Cancel',
                onPress: () => Alert.alert('Cancel Pressed'),
                style: 'cancel',
            },
        ],
        {
            cancelable: true,
            onDismiss: () =>
                Alert.alert(
                    'This alert was dismissed by tapping outside of the alert dialog.',
                ),
        },

    );


const ComAleft = () => (
    <View style={styles.container}>
        <Button title="Show alert" onPress={ShowAleft} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ComAleft;