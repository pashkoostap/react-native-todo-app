import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import todosReducer from "./todosReducer";
import navReducer from "./navReducer";

const rootReducer = combineReducers({
  nav: navReducer,
  todosReducer,
  form: formReducer
});

export default rootReducer;
