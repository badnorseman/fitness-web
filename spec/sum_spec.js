"use strict";
import sum from "./sum";

describe("sum", () => {
  it("adds 2 + 2 to equal 4", () => {
    let sum = require("./sum");
    expect(sum(2, 2)).toBe(4);
  });
})
