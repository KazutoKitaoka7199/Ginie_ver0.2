import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import InvestScreen from './bottombar/InvestScreen';
import CheckingScreen from './bottombar/CheckingScreen';
import PaymentScreen from './bottombar/PaymentScreen';
import BorrowScreen from './bottombar/BorrowScreen';
import TickerDetailScreen from '../src/screens/TickerDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function InvestPage() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="tickerDetail"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#0066FF',
        }}
      >
        <Stack.Screen name="invest" component={InvestScreen} />
        <Stack.Screen name="tickerDetail" component={TickerDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function MainContainer() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="資産運用"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#0066FF',
        }}>
        <Tab.Screen name="資産運用" component={InvestPage} />
        <Tab.Screen name="決済口座" component={CheckingScreen} />
        <Tab.Screen name="入金" component={PaymentScreen} />
        <Tab.Screen name="借入" component={BorrowScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}