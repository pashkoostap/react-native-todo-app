import { StackNavigator } from "react-navigation";

import { HOME, NEW_TODO } from "../../constants/navigation";

import Home from "../../containers/Home";
import NewTodo from "../../containers/NewTodo";

export const AppNavigation = StackNavigator(
  {
    [HOME]: {
      screen: Home
    },
    [NEW_TODO]: {
      screen: NewTodo
    }
  },
  {
    initialRouteName: HOME
  }
);
