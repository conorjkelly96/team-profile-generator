// using Manager constructor
const Manager = require("../../lib/Manager");

const instance = new Manager({
  name: "Conor Kelly",
  id: "1234565432",
  email: "conorjkelly96@gmail.com",
  officeNumber: "01213334455",
});

describe("Manager", () => {
  test("should be an instance of Manger", () => {
    const expected = "Manager";
    const actual = instance.getRole();

    expect(actual).toEqual(expected);
  });

  test("should return expected ID", () => {
    const expected = "1234565432";
    const actual = instance.id;

    expect(actual).toEqual(expected);
  });

  test("should return expected name", () => {
    const expected = "Conor Kelly";
    const actual = instance.name;

    expect(actual).toEqual(expected);
  });

  test("should return expected email", () => {
    const expected = "conorjkelly96@gmail.com";
    const actual = instance.email;

    expect(actual).toEqual(expected);
  });

  test("should return expected office number", () => {
    const expected = "01213334455";
    const actual = instance.getOfficeNumber();

    expect(actual).toEqual(expected);
  });
});
