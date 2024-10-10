import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import PdfViewer from '../screens/PdfViewer';
import BottomTabs from './bottomtabs';


const Route = () => {
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer >
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PdfViewer"
          component={PdfViewer}
          options={{headerShown: false}}
        />
   
      </Stack.Navigator>
    </NavigationContainer>
 
  );
};

export default Route;
