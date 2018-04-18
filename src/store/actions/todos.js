import { GET_TODOS, ADD_TODO, DELETE_TODO } from "../../constants/actionTypes";

export const getTodos = todos => ({
  type: GET_TODOS,
  todos
});

export const addTodo = todo => ({
  type: ADD_TODO,
  todo
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});
