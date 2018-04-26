import { mapTodos, deleteTodoById } from "../todos";

describe("todos model", () => {
  describe("mapTodos", () => {
    it("should return an empty array if provided object without any keys", () => {
      const todos = {};

      expect(mapTodos(todos)).toHaveLength(0);
    });

    it("should return array with 1 todo item", () => {
      const todo = { id: "id_1", title: "todo 1" };
      const todos = { [todo.id]: todo };

      expect(mapTodos(todos)).toEqual([todo]);
    });
  });

  describe("deleteTodoById", () => {
    it("should delete todo item from the todos object by provided id", () => {
      const todo1 = { id: "id_1", title: "todo 1" };
      const todo2 = { id: "id_2", title: "todo 2" };
      const todos = { [todo1.id]: todo1, [todo2.id]: todo2 };

      expect(deleteTodoById(todo1.id, todos)).toEqual({ [todo2.id]: todo2 });
    });
  });
});
