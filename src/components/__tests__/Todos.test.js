import React from "react";
import renderer from "react-test-renderer";

import Todos from "../Todos";

describe("Todos", () => {
  it("should match the snapshot", () => {
    const todos = [
      { title: "todo 1", id: "id_1" },
      { title: "todo 2", id: "id_2" },
      { title: "todo 3", id: "id_3" }
    ];
    const rendered = renderer.create(<Todos todos={todos} />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
