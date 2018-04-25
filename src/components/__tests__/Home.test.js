import React from "react";
import renderer from "react-test-renderer";

import { noTodosYetText } from "../../constants/messages";
import Home from "../Home";
import WarningText from "../WarningText";

describe("Home", () => {
  it("should match the snapshot", () => {
    const todos = [
      { title: "todo 1", id: "id_1" },
      { title: "todo 2", id: "id_2" },
      { title: "todo 3", id: "id_3" }
    ];
    const rendered = renderer.create(<Home todos={todos} />).toJSON();

    expect(rendered).toMatchSnapshot();
  });

  it("shoud contain WarningText component if todos are the empty array", () => {
    const todos = [];
    const root = renderer.create(<Home todos={todos} />).root;
    const innerText = root.findByType(WarningText).props.text;

    expect(innerText).toBe(noTodosYetText);
  });
});
