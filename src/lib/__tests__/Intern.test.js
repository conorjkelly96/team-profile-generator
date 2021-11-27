// using Intern constructor
const Intern = require("../../lib/Intern");

describe("Intern", () => {
  test("should be an instance of Intern", () => {
    const expected = "Intern";
    const instance = new Intern("Intern");
    const actual = instance.getRole();

    expect(actual).toEqual(expected);
  });

  test("should return expected name", () => {
    const expected = "1234565432";
    const instance = new Intern({ id: "1234565432" });
    const actual = instance.id;

    expect(actual).toEqual(expected);
  });

  test("should return expected name", () => {
    const expected = "Conor Kelly";
    const instance = new Intern({ name: "Conor Kelly" });
    const actual = instance.name;

    expect(actual).toEqual(expected);
  });

  test("should return expected email", () => {
    const expected = "conorjkelly96@gmail.com";
    const instance = new Intern({ email: "conorjkelly96@gmail.com" });
    const actual = instance.email;

    expect(actual).toEqual(expected);
  });

  test("should return expected school", () => {
    const expected = "OLOW";
    const instance = new Intern({ school: "OLOW" });
    const actual = instance.getSchool();

    expect(actual).toEqual(expected);
  });
});
