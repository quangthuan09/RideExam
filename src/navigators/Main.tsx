import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '~/theme';
import { Home, Setting } from '~/screens';
import { S20 } from '~/theme/normalize';
import { Screens } from './screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.Home}
      screenOptions={{
        headerTintColor: Colors.white,
        headerStyle: {
          backgroundColor: Colors.palette,
        },
        headerTitleStyle: {
          fontSize: S20,
        },
      }}
    >
      {screens.map((item) => (
        <Stack.Screen
          key={item.name}
          component={item.component}
          name={item.name}
          options={item.options}
        />
      ))}
    </Stack.Navigator>
  );
};
const screens = [
  {
    name: Screens.Home,
    component: Home,
    options: {
      headerShown: true,
    },
  },
  {
    name: Screens.Setting,
    component: Setting,
    options: {
      headerShown: true,
      headerBackTitleVisible: false,
      headerTitle: 'Thiết lập',
    },
  },
] as const;
export default MainNavigator;
