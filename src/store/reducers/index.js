import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import todos from "./todos";
import navReducer from "./navReducer";

const rootReducer = combineReducers({
  nav: navReducer,
  todos,
  form: formReducer
});

export default rootReducer;
