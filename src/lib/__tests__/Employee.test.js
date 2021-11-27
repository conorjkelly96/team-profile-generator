// using Employee constructor
const Employee = require("../../lib/Employee");

describe("Employee", () => {
  test("should be an instance of Employee", () => {
    const expected = "Employee";
    const instance = new Employee("Employee");
    const actual = instance.getRole();

    expect(actual).toEqual(expected);
  });

  test("should return expected name", () => {
    const expected = "1234565432";
    const instance = new Employee({ id: "1234565432" });
    const actual = instance.getId();

    expect(actual).toEqual(expected);
  });

  test("should return expected name", () => {
    const expected = "Conor Kelly";
    const instance = new Employee({ name: "Conor Kelly" });
    const actual = instance.getName();

    expect(actual).toEqual(expected);
  });

  test("should return expected email", () => {
    const expected = "conorjkelly96@gmail.com";
    const instance = new Employee({ email: "conorjkelly96@gmail.com" });
    const actual = instance.getEmail();

    expect(actual).toEqual(expected);
  });
});
