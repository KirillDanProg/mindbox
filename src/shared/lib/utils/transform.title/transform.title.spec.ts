import { describe, expect, it } from "vitest";
import { transformTitle } from "./transform.title";

describe("transform title util", () => {
  it("should correct transform title", () => {
    const resultTitle = transformTitle("new todo title");

    expect(resultTitle).toBe("New todo title");
  });

  it("should trim white spaces", () => {
    const resultTitle = transformTitle("   new todo title    ");

    expect(resultTitle).toBe("New todo title");
  });

  it("should return undefined if empty string passed", () => {
    const resultTitle = transformTitle("         ");

    expect(resultTitle).toBeUndefined();
  });
});
