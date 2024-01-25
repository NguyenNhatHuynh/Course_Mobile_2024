import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Exam1_Week1 from './Exam_Week1/Exam1_Week1';
import Exam2_Week1 from './Exam_Week1/Exam2_Week1';
import Exam3_Week1 from './Exam_Week1/Exam3_Week1';

import Exam1_Week2 from './Exam_Week2/Exam1_Week2';
import Exam2_Week2 from './Exam_Week2/Exam2_Week2';

export default function App() {
  return (
    <View style={styles.container}>

      {/* ====================== TUẦN 1 ========================= */}
      {/* <Exam1_Week1 /> */}
      {/* <Exam2_Week1 /> */}
      {/* <Exam3_Week1 /> */}




      {/* ====================== TUẦN 2 ========================= */}

      {/* <Exam1_Week2 /> */}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 30,
    flexDirection: 'column'
  },
});



