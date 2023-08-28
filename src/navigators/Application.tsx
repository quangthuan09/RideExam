import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ApplicationStackParamList } from '../@types/navigation';
import MainNavigator from './Main';
import { Provider } from 'jotai';
import { myStore } from '~/store';
import { Screens } from './screens';
const Stack = createNativeStackNavigator<ApplicationStackParamList>();

const ApplicationNavigator = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <>
      <Provider store={myStore}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Screens.Main} component={MainNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default ApplicationNavigator;
