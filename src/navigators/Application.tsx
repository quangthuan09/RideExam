import { View, Text, StatusBar } from "react-native";
import React from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApplicationStackParamList } from "../@types/navigation";
import MainNavigator from "./Main";

const Stack = createNativeStackNavigator<ApplicationStackParamList>();

const ApplicationNavigator = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
