class Engineer extends Employee {
  constructor({ name, id, github }) {
    super({ name, id, email });
    this.github = github;
  }

  getGithub() {}

  getRole() {}
}
