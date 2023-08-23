import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Setting } from "../screens";
import { MainParamsList } from "../@types/navigation";

const Stack = createNativeStackNavigator<MainParamsList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={Setting} name="Setting" />
    </Stack.Navigator>
  );
};

export default MainNavigator;
