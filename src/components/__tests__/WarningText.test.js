import React from "react";
import { Text } from "react-native";
import renderer from "react-test-renderer";

import WarningText from "../WarningText";

describe("WarningText", () => {
  it("should match the snapshot", () => {
    const text = "test";

    const rendered = renderer.create(<WarningText text={text} />).toJSON();

    expect(rendered).toMatchSnapshot();
  });

  it("should containt Text element with provided warning text", () => {
    const text = "test";

    const root = renderer.create(<WarningText text={text} />).root;
    const innerText = root.findByType(Text).props.children;

    expect(innerText).toBe(text);
  });
});
