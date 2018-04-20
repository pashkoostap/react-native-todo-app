import {
  GET_TODOS_INIT,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL
} from "../../constants/actionTypes";
import { fetchTodos } from "../../services";

const getTodosInit = () => ({
  type: GET_TODOS_INIT
});

const getTodosSuccess = todos => ({
  type: GET_TODOS_SUCCESS,
  todos
});

const getTodosFail = () => ({
  type: GET_TODOS_FAIL
});

export const getTodos = () => {
  return dispatch => {
    dispatch(getTodosInit());

    return fetchTodos
      .then(snap => dispatch(getTodosSuccess(snap.val())))
      .catch(() => dispatch(getTodosFail()));
  };
};
