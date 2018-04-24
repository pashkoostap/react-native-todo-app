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

const initialLoadersState = {
  areTodosLoading: false,
  areTodosLoaded: false,
  isTodoUploading: false,
  isTodoUploaded: false,
  isTodoDeleting: false,
  isTodoDeleted: false
};
const initState = {
  todos: {},
  ...initialLoadersState
};

const todos = (state = initState, action) => {
  switch (action.type) {
    case GET_TODOS_INIT:
      return {
        ...state,
        todos: {},
        ...initialLoadersState,
        areTodosLoading: true
      };

    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.todos || {},
        ...initialLoadersState,
        areTodosLoaded: true
      };

    case GET_TODOS_FAIL:
      return {
        ...state,
        ...initialLoadersState
      };

    case ADD_TODO_INIT:
      return {
        ...state,
        ...initialLoadersState,
        isTodoUploading: true
      };

    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: { ...state.todos, [action.todo.id]: action.todo },
        ...initialLoadersState,
        isTodoUploaded: true
      };

    case ADD_TODO_FAIL:
      return {
        ...state,
        ...initialLoadersState
      };

    case DELETE_TODO_INIT:
      return {
        ...state,
        ...initialLoadersState,
        isTodoDeleting: true
      };

    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: deleteTodoById(action.id, state.todos),
        ...initialLoadersState,
        isTodoDeleted: true
      };

    case DELETE_TODO_FAIL:
      return {
        ...state,
        ...initialLoadersState
      };

    default:
      return state;
  }
};

export default todos;
