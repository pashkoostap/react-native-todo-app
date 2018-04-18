import { createStore, applyMiddleware, compose } from "redux";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";

const reactNavigationMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);
const middlewares = [reactNavigationMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
