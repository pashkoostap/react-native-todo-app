import { StackNavigator } from "react-navigation";

import { HOME, TODO_MODAL } from "../../constants/navigation";

import Home from "../../containers/Home";
import TodoModal from "../../containers/TodoModal";

export const AppNavigation = StackNavigator(
  {
    [HOME]: {
      screen: Home
    },
    [TODO_MODAL]: {
      screen: TodoModal
    }
  },
  {
    initialRouteName: HOME
  }
);
