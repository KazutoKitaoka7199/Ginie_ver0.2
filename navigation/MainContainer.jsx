import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import InvestScreen from './bottombar/InvestScreen';
import CheckingScreen from './bottombar/CheckingScreen';
import PaymentScreen from './bottombar/PaymentScreen';
import BorrowScreen from './bottombar/BorrowScreen';
import TickerDetailScreen from '../src/screens/TickerDetailScreen';
import ArticleScreen from '../src/screens/ArticleScreen';
import AllocationChartScreen from '../src/screens/AllocationChartScreen';
import InvestmentStatusScren from '../src/screens/InvestentStatusScreen';
import InvestStatusResultScreen from '../src/screens/InvestmentStatusResultScreen';

LogBox.ignoreLogs(['AsyncStorage']);
LogBox.ignoreLogs(['Settting a timer']);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function InvestPage() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="invest"
        screenOptions={{
          headerShown: true,
          tabBarActiveTintColor: '#0066FF',
        }}
      >
        <Stack.Screen name="invest" component={InvestScreen} options={{ headerTitle: "資産運用" }}/>
        <Stack.Screen name="tickerDetail" component={TickerDetailScreen} options={{ headerTitle: "資産運用" }}/>
        <Stack.Screen name="Article" component={ArticleScreen} />
        <Stack.Screen name="allocationChart" component={AllocationChartScreen} options={{ headerTitle: "資産運用" }}/>
        <Stack.Screen name="InvestmentStatus" component={InvestmentStatusScren} options={{ headerTitle: "初回入金" }}/>
        <Stack.Screen name="InvestmentStatusResult" component={InvestStatusResultScreen} options={{ headerTitle: "資産運用" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//screen names
const InvestScreenName = "資産運用";
const CheckingScreenName = "決済口座";
const PaymentScreenName = "入金";
const BorrowScreenName = "借入"

export default function MainContainer() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={InvestScreenName}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#0066FF',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === InvestScreenName)
            {
              iconName = focused ? 'pie-chart' : 'pie-chart-outline';

            } else if (rn === CheckingScreenName)
            {
              iconName = focused ? 'wallet' : 'wallet-outline';

            } else if (rn === PaymentScreenName)
            {
              iconName = focused ? 'md-download' : 'md-download-outline';
            } else if (rn === BorrowScreenName)
            {
              iconName = focused ? 'cash' : 'cash-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        })
      }
      >
        <Tab.Screen name={InvestScreenName} component={InvestPage} />
        <Tab.Screen name={CheckingScreenName} component={CheckingScreen} />
        <Tab.Screen name={PaymentScreenName} component={PaymentScreen} />
        <Tab.Screen name={BorrowScreenName} component={BorrowScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}