import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from '../@types/navigation';

export const useAppNavigation = () => {
  // return useNavigation<
  //   NavigationProp<
  //     ApplicationStackParamList,
  //     keyof ApplicationStackParamList,
  //     undefined,
  //     NavigationState<ApplicationStackParamList>,
  //     StackHeaderOptions,
  //     TEventMap
  //   >
  // >();
  return useNavigation<
    NativeStackNavigationProp<ApplicationStackParamList, keyof ApplicationStackParamList, undefined>
  >();
};

export const useAppRoute = <RouteName extends keyof ApplicationStackParamList>(
  route: RouteName
) => {
  return useRoute<RouteProp<ApplicationStackParamList, typeof route>>();
};
