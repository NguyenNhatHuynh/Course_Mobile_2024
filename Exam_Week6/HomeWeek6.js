import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ManHinhChinh } from './ManHinhChinh';
import { ManHinhChinh2 } from './App2/ManHinhChinh2'

import { Provider } from 'react-redux';
import store from './store'

export const HomeWeek6 = () => {
    return (
        <Provider store={store}>
            {/* <ManHinhChinh /> */}
            <ManHinhChinh2 />
        </Provider>
    );
}
