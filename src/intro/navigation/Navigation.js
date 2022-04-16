import React, {useEffect, useState} from "react";
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
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../../components/Firebase";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="main"
        >
          <Stack.Screen name="main" component={MainContainer} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="firstPage"
        >
          <Stack.Screen name="firstPage" component={Landing} />
          <Stack.Screen name="onbording" component={Onbording} />
          <Stack.Screen name="logIn" component={LogInScreen} />
          <Stack.Screen
            name="signUp"
            component={SignUpScreen}
            // options={{
            //   cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            // }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
