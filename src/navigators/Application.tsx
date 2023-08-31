import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ApplicationStackParamList } from '../@types/navigation';
import MainNavigator from './Main';
import { Screens } from './screens';
import { useGetTopics } from '~/helper/fetchData';

const Stack = createNativeStackNavigator<ApplicationStackParamList>();

const ApplicationNavigator = () => {
  useGetTopics();
  const navigationRef = useNavigationContainerRef();
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={Screens.Main} component={MainNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default ApplicationNavigator;
