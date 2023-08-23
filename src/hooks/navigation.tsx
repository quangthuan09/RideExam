import {
  // eslint-disable-next-line @typescript-eslint/no-restricted-imports
  useNavigation,
  RouteProp,
  // eslint-disable-next-line @typescript-eslint/no-restricted-imports
  useRoute,
  NavigationProp,
  NavigationState,
} from "@react-navigation/native";
import { ApplicationStackParamList, TEventMap } from "../@types/navigation";
import { StackHeaderOptions } from "@react-navigation/stack/lib/typescript/src/types";

export const useAppNavigation = () => {
  return useNavigation<
    NavigationProp<
      ApplicationStackParamList,
      keyof ApplicationStackParamList,
      undefined,
      NavigationState<ApplicationStackParamList>,
      StackHeaderOptions,
      TEventMap
    >
  >();
};

export const useAppRoute = <RouteName extends keyof ApplicationStackParamList>(
  route: RouteName
) => {
  return useRoute<RouteProp<ApplicationStackParamList, typeof route>>();
};
