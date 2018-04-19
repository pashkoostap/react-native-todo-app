import {
  GET_TODOS_INIT,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL,
  ADD_TODO,
  DELETE_TODO
} from "../../constants/actionTypes";

const initState = {
  todos: [],
  isLoading: false,
  isLoaded: false
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

    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.todo] };

    case DELETE_TODO:
      return state;

    default:
      return state;
  }
};

export default todos;
