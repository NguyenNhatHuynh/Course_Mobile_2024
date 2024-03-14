import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native'
import Exam1_Week1 from './Exam_Week1/Exam1_Week1';
import Exam2_Week1 from './Exam_Week1/Exam2_Week1';
import Exam3_Week1 from './Exam_Week1/Exam3_Week1';

import Exam1_Week2 from './Exam_Week2/Exam1_Week2';
import Exam2_Week2 from './Exam_Week2/Exam2_Week2';
import Exam3_Week2 from './Exam_Week2/Exam3_Week2';
import Exam4_Week2 from './Exam_Week2/Exam4_Week2';
import Exam5_Week2 from './Exam_Week2/Exam5_Week2';
import Exam6_Week2 from './Exam_Week2/Exam6_Week2';
import Exam7_Week2 from './Exam_Week2/Exam7_Week2';


import Exam1_Week3 from './Exam_Week3/Hello';
import DenDo from './Exam_Week3/Exam2_Week3/DenDo';
import DenVang from './Exam_Week3/Exam2_Week3/DenVang';
import DenXanh from './Exam_Week3/Exam2_Week3/DenXanh';
import Exam3_Week3 from './Exam_Week3/Exam3_Week3';
import Exam4_Week3 from './Exam_Week3/Exam4_Week3';



import Exam1_Week4 from './Exam_Week4/Exam1_Week4';
import Exam2_Week4 from './Exam_Week4/Exam2_Week4';
import Exam3_App1_Week4 from './Exam_Week4/Exam3_App1_Week4';



// import Exam1_Week5 from './Exam_Week5/Exam1_Week5';
// import Exam2_Week5 from './Exam_Week5/Exam2_Week5';
import HomeScreen from './Exam_Week5/HomeScreen';
import ScreenOne from './Exam_Week5/ScreenOne'
import ScreenTwo from './Exam_Week5/ScreenTwo'


import Week1 from './Exam_Week1/Week1';
import XoanDevHome from './All_Week/XoanDevHome';


import ComSectionList from './ThaoLuan/ComSectionList';
import ComTouchAbleWithoutFeedbak from './ThaoLuan/ComTouchAbleWithoutFeedbak';
import ComActivityIndicator from './ThaoLuan/ComActivityIndicator';
import ComAleft from './ThaoLuan/ComAleft';
import _Modal from './ThaoLuan/_Modal';
import Navigation from './Navbar/Navigation';

// const Stack = createNativeStackNavigator();

export default function App() {
  return (

    // <ComActivityIndicator />
    // <_Modal />
    // <ComSectionList />
    // <ComTouchAbleWithoutFeedbak />
    // <ComAleft />

    // <View style={styles.container}>

    //   {/* ====================== TUẦN 1 ========================= */}
    // <Exam1_Week1 />
    //   {/* <Exam2_Week1 /> */}
    //   {/* <Exam3_Week1 /> */}




    //   {/* ====================== TUẦN 2 ========================= */}
    //   {/* <Exam1_Week2 /> */}
    //   {/* <Exam2_Week2 /> */}
    //   {/* <Exam4_Week2 /> */}


    //   {/* <Exam3_Week2 /> */}
    //   {/* <Exam5_Week2 /> */}


    //   {/* <Exam6_Week2 /> */}
    //   {/* <Exam7_Week2 /> */}


    //   {/* ====================== TUẦN 3 ========================= */}
    // <Exam1_Week3 />
    // <Exam3_Week3 />
    // <Exam4_Week3 />

    // <DenDo />
    // <DenVang />
    // <DenXanh />



    //   {/* ====================== TUẦN 4 ========================= */}
    // <Exam1_Week4 />
    // <Exam2_Week4 />
    <Exam3_App1_Week4 />




    //   {/* ====================== TUẦN 5 ========================= */}
    // <Exam1_Week5 />
    //   {/* <Exam2_Week5 /> */}
    //   {/*Chua Duoc*/}



    // ========================================================================================
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="XoanDevHome" component={XoanDevHome} />



    //     {/* <Stack.Screen name="Exam1_Week1" component={Exam1_Week1} /> */}
    //     {/* <Stack.Screen name="ScreenOne" component={ScreenOne} />
    //     <Stack.Screen name="ScreenTwo" component={ScreenTwo}
    //       options={{
    //         headerStyle: { backgroundColor: 'orange' },
    //         headerTitleStyle: { fontWeight: 'bold' },
    //         headerTintColor: 'white',
    //         headerTitleAlign: 'center'
    //       }}
    //     /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>



    // <View style={styles.container}>
    //   <TouchableOpacity onPress={() => props.navigation.navigate()} style={styles.btn}>
    //     <Text style={styles.txt}>Bài Tập Tuần 1</Text>
    //   </TouchableOpacity>
    //   <TouchableOpacity onPress={() => navigation.navigate('Week2')} style={styles.btn}>
    //     <Text style={styles.txt}>Bài Tập Tuần 2</Text>
    //   </TouchableOpacity>
    // </View>

    // <Navigation />

  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 30,
    flexDirection: 'column',
  },

});



