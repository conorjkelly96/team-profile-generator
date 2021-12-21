// using Employee constructor
const Employee = require("../../lib/Employee");

const instance = new Employee({
  name: "Conor Kelly",
  id: "1234551241",
  email: "conorjkelly96@gmail.com",
});

describe("Employee", () => {
  test("should be an instance of Employee", () => {
    const expected = "Employee";
    const actual = instance.getRole();

    expect(actual).toEqual(expected);
  });

  test("should return expected ID", () => {
    const expected = "1234551241";
    const actual = instance.getId();

    expect(actual).toEqual(expected);
  });

  test("should return expected name", () => {
    const expected = "Conor Kelly";
    const actual = instance.getName();

    expect(actual).toEqual(expected);
  });

  test("should return expected email", () => {
    const expected = "conorjkelly96@gmail.com";
    const actual = instance.getEmail();

    expect(actual).toEqual(expected);
  });
});
