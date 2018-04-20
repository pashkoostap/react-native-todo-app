import {
  DELETE_TODO_INIT,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL
} from "../../constants/actionTypes";
import { removeTodo } from "../../services";

const deleteTodoInit = () => ({
  type: DELETE_TODO_INIT
});

const deleteTodoSucces = id => ({
  type: DELETE_TODO_SUCCESS,
  id
});

const deleteTodoFail = () => ({
  type: DELETE_TODO_FAIL
});

export const deleteTodo = id => {
  return dispatch => {
    dispatch(deleteTodoInit());

    return removeTodo(id)
      .then(() => dispatch(deleteTodoSucces(id)))
      .catch(() => dispatch(deleteTodoFail()));
  };
};
