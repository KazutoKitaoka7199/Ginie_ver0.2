import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import TickerDetailScreen from "../src/screens/TickerDetailScreen";
import BorrowScreen from "./bottombar/BorrowScreen";
import CheckingScreen from "./bottombar/CheckingScreen";
import InvestScreen from "./bottombar/InvestScreen";
import PaymentScreen from "./bottombar/PaymentScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function InvestPage() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName={"資産追加"}>
        <Stack.Screen name="資産追加" component={InvestScreen} />
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
          tabBarActiveTintColor: "#0066FF",
        }}
      >
        <Tab.Screen name="資産運用" component={InvestPage} />
        <Tab.Screen name="決済口座" component={CheckingScreen} />
        <Tab.Screen name="入金" component={PaymentScreen} />
        <Tab.Screen name="借入" component={BorrowScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
