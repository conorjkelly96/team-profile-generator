// using Manager constructor
const Manager = require("../lib/Manager");

describe("Manager", () => {
  test("should be an instance of Manger", () => {
    const expected = "Manager";
    const instance = new Manager("Manager");
    const actual = instance.getRole();

    expect(actual).toEqual(expected);
  });

  test("should return expected name", () => {});

  test("should return expected id", () => {});

  test("should return expected email", () => {});

  test("should return expected office number", () => {});

  test("should return expected role", () => {});
});
