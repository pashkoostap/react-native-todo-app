import { combineReducers } from "redux";

import todos from "./todos";
import navReducer from "./navReducer";

const rootReducer = combineReducers({
  nav: navReducer,
  todos
});

export default rootReducer;
