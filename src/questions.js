//questions that will be prompted to the user to build team
const teamBuilderQuestions = [
  {
    type: "input",
    message: "Enter team name:",
    name: "teamName",
  },
  {
    type: "input",
    message: "Enter your name:",
    name: "managerName",
  },
  {
    type: "input",
    message: "Enter employee ID:",
    name: "managerID",
  },
  {
    type: "input",
    message: "Enter email address",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "Enter office number",
    name: "managerOfficeNumber",
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
    name: "employeeName",
    message: "Enter employee name:",
  },
  {
    type: "input",
    name: "employeeID",
    message: "Enter employee ID:",
  },
  {
    type: "input",
    name: "employeeGithub",
    message: "Enter employee github:",
  },
  {
    type: "input",
    name: "employeeEmail",
    message: "Enter employee e-mail:",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "Enter intern name:",
  },
  {
    type: "input",
    name: "internID",
    message: "Enter intern id:",
  },
  {
    type: "input",
    name: "internEmail",
    message: "Enter intern email:",
  },
  {
    type: "input",
    name: "internSchool",
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
};
