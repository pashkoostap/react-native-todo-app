import { createStore, applyMiddleware, compose } from "redux";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import middlewares from "./middlewares";

const reactNavigationMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);
// const middlewares = [reactNavigationMiddleware, thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
