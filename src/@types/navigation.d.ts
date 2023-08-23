import { NavigatorScreenParams } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

export type MainParamsList = {
  Home: undefined;
  Setting: undefined;
};

export type ApplicationStackParamList = {
  Main: NavigatorScreenParams<MainParamsList>;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;

export type TEventMap = EventMapBase & {
  tabPress: undefined;
};
