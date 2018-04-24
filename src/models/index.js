export const mapTodos = todosObj =>
  Object.keys(todosObj).map(id => todosObj[id]);

export const deleteTodoById = (id, todos) => {
  const todosObj = { ...todos };
  delete todosObj[id];

  return todosObj;
};

export const getParamsFromNavigationState = (navigation, key) => {
  const params = navigation.state.params;

  return (params && params[key]) || {};
};
