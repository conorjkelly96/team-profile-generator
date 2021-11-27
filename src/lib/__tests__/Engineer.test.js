// using Engineer constructor
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  // creating engineer object
  test("creates an Engineer object", () => {
    const engineer = new Engineer(
      "Conor Kelly",
      10,
      "conorjkelly96@gmail",
      "cokelly13a"
    );

    expect(engineer.github).toEqual(expect.any(String));
  });

  // gets github from getGithub()
  test("gets engineer github value", () => {
    const engineer = new Engineer(
      "Conor Kelly",
      10,
      "conorjkelly96@gmail",
      "cokelly13a"
    );

    expect(engineer.getGithub()).toEqual(
      expect.stringContaining(engineer.github.toString())
    );
  });

  // gets role from getRole()
  test("gets role of employee", () => {
    const engineer = new Engineer(
      "Conor Kelly",
      10,
      "conorjkelly96@gmail",
      "cokelly13a"
    );

    expect(engineer.getRole()).toEqual("Engineer");
  });
});
