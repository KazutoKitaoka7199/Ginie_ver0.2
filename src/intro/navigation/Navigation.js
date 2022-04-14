import React from "react";
import {View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/native-stack";

import Onbording from "../Onbording";
import Landing from "../Landing";
import MainContainer from "../../../navigation/MainContainer";
import LogInScreen from "../../screens/LogInScreen";
import SignUpScreen from "../../screens/SignUpScreen";
import TickerDetailScreen from "../../screens/TickerDetailScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="main"
      >
        <Stack.Screen name="firstPage" component={Landing} />
        <Stack.Screen name="onbording" component={Onbording} />
        <Stack.Screen name="login" component={LogInScreen} />
        <Stack.Screen name="signUp" component={SignUpScreen} />
        <Stack.Screen name="main" component={MainContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
