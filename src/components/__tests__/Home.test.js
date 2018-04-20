import React from "react";
import { Text } from "react-native";
import renderer from "react-test-renderer";

import { noTodosYetText } from "../../constants/messages";
import Home from "../Home";

describe("Home", () => {
  it("should match the snapshot", () => {
    const todos = ["todo 1", "todo 2", "todo 3"];
    const rendered = renderer.create(<Home todos={todos} />).toJSON();

    expect(rendered).toMatchSnapshot();
  });

  it("shoud contain Text element if todos are the empty array", () => {
    const todos = [];
    const root = renderer.create(<Home todos={todos} />).root;
    const innerText = root.findByType(Text).props.children;

    expect(innerText).toBe(noTodosYetText);
  });
});
