import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native'

import Exam1_Week1 from './Exam_Week1/Exam1_Week1';
import Exam2_Week1 from './Exam_Week1/Exam2_Week1';
import Exam3_Week1 from './Exam_Week1/Exam3_Week1';
import HomeWeek1 from './Exam_Week1/HomeWeek1';

import Exam1_Week2 from './Exam_Week2/Exam1_Week2';
import Exam2_Week2 from './Exam_Week2/Exam2_Week2';
import Exam3_Week2 from './Exam_Week2/Exam3_Week2';
import Exam4_Week2 from './Exam_Week2/Exam4_Week2';
import Exam5_Week2 from './Exam_Week2/Exam5_Week2';
import Exam6_Week2 from './Exam_Week2/Exam6_Week2';
import Exam7_Week2 from './Exam_Week2/Exam7_Week2';
import HomeWeek2 from './Exam_Week2/HomeWeek2';


import Exam1_Week3 from './Exam_Week3/Hello';
import DenDo from './Exam_Week3/Exam2_Week3/DenDo';
import DenVang from './Exam_Week3/Exam2_Week3/DenVang';
import DenXanh from './Exam_Week3/Exam2_Week3/DenXanh';
import Exam3_Week3 from './Exam_Week3/Exam3_Week3';
import Exam4_Week3 from './Exam_Week3/Exam4_Week3';
import Exam5_Week3 from './Exam_Week3/Exam5_Week3';
import HomeWeek3 from './Exam_Week3/HomeWeek3';


import Exam1_Week4 from './Exam_Week4/Exam1_Week4';
import Exam2_Week4 from './Exam_Week4/Exam2_Week4';
import Exam3_App1_Week4 from './Exam_Week4/Exam3_App1_Week4';
import Exam3_App2_Week4 from './Exam_Week4/Exam3_App2_Week4';
import HomeWeek4 from './Exam_Week4/HomeWeek4';




import HomeScreen from './Exam_Week5/HomeScreen';
import ScreenOne from './Exam_Week5/ScreenOne'
import ScreenTwo from './Exam_Week5/ScreenTwo'
import Exam1_Week5 from './Exam_Week5/Exam1_Week5';
import HomeWeek5 from './Exam_Week5/HomeWeek5';

import XoanDevHome from './All_Week/XoanDevHome';


import ComSectionList from './ThaoLuan/ComSectionList';
import ComTouchAbleWithoutFeedbak from './ThaoLuan/ComTouchAbleWithoutFeedbak';
import ComActivityIndicator from './ThaoLuan/ComActivityIndicator';
import ComAleft from './ThaoLuan/ComAleft';
import _Modal from './ThaoLuan/_Modal';
import Navigation from './Navbar/Navigation';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='XoanDevHome' component={XoanDevHome} />

        {/* START - ALL EXAM OF WEEK 1 */}
        <Stack.Screen name="HomeWeek1" component={HomeWeek1}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="Exam1_Week1" component={Exam1_Week1}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="Exam2_Week1" component={Exam2_Week1}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="Exam3_Week1" component={Exam3_Week1}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />
        {/* END - ALL EXAM OF WEEK 1 */}



        {/* START - ALL EXAM OF WEEK 2 */}
        <Stack.Screen name="HomeWeek2" component={HomeWeek2}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="Exam1_Week2" component={Exam1_Week2}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="Exam2_Week2" component={Exam2_Week2}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="Exam3_Week2" component={Exam3_Week2}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="Exam4_Week2" component={Exam4_Week2}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="Exam5_Week2" component={Exam5_Week2}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="Exam6_Week2" component={Exam6_Week2}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="Exam7_Week2" component={Exam7_Week2}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />


        {/* START - ALL EXAM OF WEEK 3 */}
        <Stack.Screen name="HomeWeek3" component={HomeWeek3}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />
        {/* <Stack.Screen name="Exam1_Week3" component={Exam1_Week3}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        /> */}
        <Stack.Screen name="Exam3_Week3" component={Exam3_Week3}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="Exam4_Week3" component={Exam4_Week3}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="Exam5_Week3" component={Exam5_Week3}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />


        {/* START - ALL EXAM OF WEEK 4 */}
        <Stack.Screen name="HomeWeek4" component={HomeWeek4}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="Exam1_Week4" component={Exam1_Week4}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="Exam2_Week4" component={Exam2_Week4}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="Exam3_App1_Week4" component={Exam3_App1_Week4}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="Exam3_App2_Week4" component={Exam3_App2_Week4}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />

        {/* START - ALL EXAM OF WEEK 5 */}
        <Stack.Screen name="HomeWeek5" component={HomeWeek5}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="Exam1_Week5" component={Exam1_Week5}
          options={{
            headerStyle: { backgroundColor: 'grey' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: 'white',
            headerTitleAlign: 'center'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}




const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 30,
    flexDirection: 'column',
  },

});



