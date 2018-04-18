import { GET_TODOS, ADD_TODO, DELETE_TODO } from "../actions/actionTypes";

const initState = {
  todos: []
};

const todos = (state = initState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: action.todos };

    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.todo] };

    case DELETE_TODO:
      return state;

    default:
      return state;
  }
};

export default todos;
