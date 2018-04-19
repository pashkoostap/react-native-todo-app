import {
  GET_TODOS_INIT,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL,
  ADD_TODO,
  DELETE_TODO
} from "../../constants/actionTypes";
import { fetchTodos } from "../../services";

export const getTodosInit = () => ({
  type: GET_TODOS_INIT
});

export const getTodosSuccess = todos => ({
  type: GET_TODOS_SUCCESS,
  todos
});

export const getTodosFail = () => ({
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

export const addTodo = todo => ({
  type: ADD_TODO,
  todo
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});
