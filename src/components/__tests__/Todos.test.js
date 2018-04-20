import React from "react";
import renderer from "react-test-renderer";

import Todos from "../Todos";

describe("Todos", () => {
  it("should match the snapshot", () => {
    const todos = ["todo 1", "todo 2", "todo 3"];
    const rendered = renderer.create(<Todos todos={todos} />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
