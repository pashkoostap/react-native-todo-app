import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
import thunk from "redux-thunk";

const reactNavigationMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);
const middlewares = [reactNavigationMiddleware, thunk];

export default middlewares;
