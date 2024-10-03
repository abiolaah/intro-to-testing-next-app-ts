import { add } from "./add";

xdescribe("ADD FUNCTION", () => {
  it("test functions that import sever-only", () => {
    expect(add(1, 2)).toEqual(3);
  });

  it("test functions that import sever-only: case not", () => {
    expect(add(1, 2)).not.toEqual(4);
  });
});
