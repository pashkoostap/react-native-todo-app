import React from "react";
import renderer from "react-test-renderer";
import Todo from "../Todo";

describe("Todo", () => {
  it("should match the snapshot", () => {
    const todo = "todo";
    const rendered = renderer.create(<Todo title={todo} />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
