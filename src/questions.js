//questions that will be prompted to the user to build team
const teamBuilderQuestions = [
  {
    type: "input",
    message: "Enter team name:",
    name: "teamName",
  },
];

const managerQuestion = [
  {
    type: "input",
    message: "Enter your name:",
    name: "name",
  },
  {
    type: "input",
    message: "Enter employee ID:",
    name: "id",
  },
  {
    type: "input",
    message: "Enter email address",
    name: "email",
    validate: function (email) {
      // Regex mail check (return true if valid mail)
      return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
        email
      );
    },
  },
  {
    type: "input",
    message: "Enter office number",
    name: "officeNumber",
  },
];

const employeeTypeQuestion = [
  {
    type: "list",
    message: "Select team member type",
    name: "employeeType",
    choices: ["Engineer", "Intern"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter employee name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter employee ID:",
  },
  {
    type: "input",
    name: "github",
    message: "Enter employee github:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter employee e-mail:",
    validate: function (email) {
      // Regex mail check (return true if valid mail)
      return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
        email
      );
    },
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter intern name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter intern id:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter intern email:",
    validate: function (email) {
      // Regex mail check (return true if valid mail)
      return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
        email
      );
    },
  },
  {
    type: "input",
    name: "school",
    message: "Enter intern school:",
  },
];

const continueQuestion = [
  {
    type: "confirm",
    name: "newMember",
    message: "Would you like to add another team member?",
  },
];

module.exports = {
  teamBuilderQuestions,
  employeeTypeQuestion,
  engineerQuestions,
  internQuestions,
  continueQuestion,
  managerQuestion,
};
