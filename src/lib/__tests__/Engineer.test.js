// using Engineer constructor
const Engineer = require("../../lib/Engineer");

const instance = new Engineer({
  name: "Conor Kelly",
  id: "1234565432",
  email: "conorjkelly96@gmail.com",
});

describe("Engineer", () => {
  test("should be an instance of Engineer", () => {
    const expected = "Engineer";
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

  test("should return expected school", () => {
    const expected = "crazyLemon";
    const instance = new Engineer({ github: "crazyLemon" });
    const actual = instance.getGithub();

    expect(actual).toEqual(expected);
  });
});
