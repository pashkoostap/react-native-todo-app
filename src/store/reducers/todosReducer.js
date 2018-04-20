import {
  GET_TODOS_INIT,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL,
  ADD_TODO_INIT,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  DELETE_TODO_INIT,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL
} from "../../constants/actionTypes";
import { deleteTodoById } from "../../models";

const initState = {
  todos: [],
  isLoading: false,
  isLoaded: false,
  isTodoUploading: false,
  isTodoUploaded: false,
  isTodoDeleting: false,
  isTodoDeleted: false
};

const todos = (state = initState, action) => {
  switch (action.type) {
    case GET_TODOS_INIT:
      return { ...state, isLoading: true };

    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.todos || {},
        isLoading: false,
        isLoaded: true
      };

    case GET_TODOS_FAIL:
      return {
        ...state,
        isLoaded: false,
        isLoading: false
      };

    case ADD_TODO_INIT:
      return {
        ...state,
        isTodoUploading: true,
        isTodoUploaded: false,
        dasdasdsd: "dasdsad"
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: { ...state.todos, [action.todo.id]: action.todo },
        isTodoUploading: false,
        isTodoUploaded: true
      };

    case ADD_TODO_FAIL:
      return {
        ...state,
        isTodoUploading: false,
        isTodoUploaded: false
      };

    case DELETE_TODO_INIT:
      return {
        ...state,
        isTodoDeleting: true,
        isTodoDeleted: false
      };

    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: deleteTodoById(action.id, state.todos),
        isTodoDeleting: false,
        isTodoDeleted: true
      };

    case DELETE_TODO_FAIL:
      return {
        ...state,
        isTodoDeleting: false,
        isTodoDeleted: false
      };

    default:
      return state;
  }
};

export default todos;
