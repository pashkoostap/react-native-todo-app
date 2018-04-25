import { mapTodos, deleteTodoById } from "../todos";

describe("todos model", () => {
  describe("mapTodos functionality", () => {
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
});
