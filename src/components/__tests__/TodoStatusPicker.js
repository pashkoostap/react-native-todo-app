import React from "react";
import renderer from "react-test-renderer";

import TodoStatusPicker from "../TodoStatusPicker";

describe("TodoStatusPicker", () => {
  it("should match the snapshot", () => {
    const props = { input: { onChange: () => {}, value: "" } };
    const rendered = renderer.create(<TodoStatusPicker {...props} />).toJSON();

    expect(rendered).toMatchSnapshot();
  });
});
