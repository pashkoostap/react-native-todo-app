import { getParamsFromNavigationState } from "../navigation";

describe("navigation model", () => {
  it("should return empty object", () => {
    const navigation = {};

    expect(getParamsFromNavigationState(navigation)).toEqual({});
  });

  it("should return todo item", () => {
    const todo = { title: "todo", id: "id_1" };
    const navWithstateParams = { state: { params: { todo } } };

    expect(getParamsFromNavigationState(navWithstateParams, "todo")).toEqual(
      todo
    );
  });
});
