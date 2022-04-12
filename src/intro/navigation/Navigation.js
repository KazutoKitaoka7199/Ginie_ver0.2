import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onbording from '../Onbording';
import Landing from '../Landing';
import MainContainer from '../../../navigation/MainContainer';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="firstPage"
      >
        <Stack.Screen name="firstPage" component={Landing} />
        <Stack.Screen name="onbording" component={Onbording} />
        <Stack.Screen name="main" component={MainContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}