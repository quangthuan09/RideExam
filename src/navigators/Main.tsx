import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '~/theme';
import { Home, Setting } from '~/screens';
import { S20 } from '~/theme/normalize';
import { Screens } from './screens';
import SetTopic from '~/screens/SetTopic/SetTopic';
import SeeWrongAnswer from '~/screens/SeeWrongAnswer/SeeWrongAnswer';
import Signs from '~/screens/Signs/Signs';
import StudyQuestion from '~/screens/StudyQuestion/StudyQuestion';
import Tips from '~/screens/Tips/Tips';
import TopWrongAnswer from '~/screens/TopWrongAnswer/TopWrongAnswer';
import Traps from '~/screens/Traps/Traps';
import RandomQuest from '~/screens/RandomQuest/RandomQuest';

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
        headerBackTitleVisible: false,
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
  {
    name: Screens.SeeWrongAnswer,
    component: SeeWrongAnswer,
    options: {
      headerShown: true,
    },
  },
  {
    name: Screens.Signs,
    component: Signs,
    options: {
      headerShown: true,
    },
  },
  {
    name: Screens.SetTopic,
    component: SetTopic,
    options: {
      headerShown: true,
    },
  },
  {
    name: Screens.StudyQuestion,
    component: StudyQuestion,
    options: {
      headerShown: true,
    },
  },
  {
    name: Screens.Tips,
    component: Tips,
    options: {
      headerShown: true,
    },
  },
  {
    name: Screens.TopWrongAnswer,
    component: TopWrongAnswer,
    options: {
      headerShown: true,
    },
  },
  {
    name: Screens.Traps,
    component: Traps,
    options: {
      headerShown: true,
    },
  },
  {
    name: Screens.RandomQuest,
    component: RandomQuest,
    options: {
      headerShown: true,
    },
  },
] as const;
export default MainNavigator;
