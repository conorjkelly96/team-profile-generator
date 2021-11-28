// using Manager constructor
const Manager = require("../../lib/Manager");

describe("Manager", () => {
  test("should be an instance of Manger", () => {
    const expected = "Manager";
    const instance = new Manager("Manager");
    const actual = instance.getRole();

    expect(actual).toEqual(expected);
  });

  test("should return expected ID", () => {
    const expected = "1234565432";
    const instance = new Manager({ id: "1234565432" });
    const actual = instance.id;

    expect(actual).toEqual(expected);
  });

  test("should return expected name", () => {
    const expected = "Conor Kelly";
    const instance = new Manager({ name: "Conor Kelly" });
    const actual = instance.name;

    expect(actual).toEqual(expected);
  });

  test("should return expected email", () => {
    const expected = "conorjkelly96@gmail.com";
    const instance = new Manager({ email: "conorjkelly96@gmail.com" });
    const actual = instance.email;

    expect(actual).toEqual(expected);
  });

  test("should return expected office number", () => {
    const expected = "01213334455";
    const instance = new Manager({ officeNumber: "01213334455" });
    const actual = instance.getOfficeNumber();

    expect(actual).toEqual(expected);
  });
});
