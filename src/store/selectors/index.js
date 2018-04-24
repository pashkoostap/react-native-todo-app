export const getFormFromState = state => state.form;
export const getTodoValue = form => {
  const todo = form["todo"];

  return (todo["values"] && todo["values"]["todo"]) || {};
};
