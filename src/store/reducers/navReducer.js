import { StackNavigator } from "react-navigation";

import { AppNavigation } from "../../containers/navigation/AppNavigation";

const initialState = AppNavigation.router.getStateForAction("Home");

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigation.router.getStateForAction(action, state);

  return nextState || state;
};

export default navReducer;
