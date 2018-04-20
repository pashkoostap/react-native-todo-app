import {
  GET_TODOS_INIT,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL,
  ADD_TODO_INIT,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL
} from "../../constants/actionTypes";

const initState = {
  todos: [],
  isLoading: false,
  isLoaded: false,
  isTodoUploading: true,
  isTodoUploaded: false
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
        isTodoUploaded: false
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

    default:
      return state;
  }
};

export default todos;
