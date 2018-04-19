import { StackNavigator } from "react-navigation";

import { HOME } from "../../constants/navigation";

import Home from "../../containers/Home";

export const AppNavigation = StackNavigator(
  {
    [HOME]: {
      screen: Home
    }
  },
  {
    initialRouteName: HOME
  }
);
