import React from "react";
import renderer from "react-test-renderer";

import Todos from "../Todos";

describe("Todos", () => {
  it("should match the snapshot", () => {
    const todos = [
      { title: "todo 1" },
      { title: "todo 2" },
      { title: "todo 3" }
    ];
    const rendered = renderer.create(<Todos todos={todos} />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
