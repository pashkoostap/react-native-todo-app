import {
  ADD_TODO_INIT,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL
} from "../../constants/actionTypes";
import { createTodo } from "../../services";

const addTodoInit = () => ({
  type: ADD_TODO_INIT
});

const addTodoSuccess = todo => ({
  type: ADD_TODO_SUCCESS,
  todo
});

const addTodoFail = () => ({
  type: ADD_TODO_FAIL
});

export const addTodo = todo => {
  return dispatch => {
    dispatch(addTodoInit());

    return createTodo(todo)
      .then(() => dispatch(addTodoSuccess(todo)))
      .catch(() => dispatch(addTodoFail()));
  };
};
