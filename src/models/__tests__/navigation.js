import { getParamsFromNavigationState } from "../navigation";

describe("navigation model", () => {
  it("should return empty object", () => {
    const navigation = {};

    expect(getParamsFromNavigationState(navigation)).toEqual({});
  });
});
