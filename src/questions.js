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
    name: "text",
    message: "Enter employee name:",
  },
  {
    type: "input",
    name: "text",
    message: "Enter employee name:",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "text",
    message: "Enter employee name:",
  },
  {
    type: "input",
    name: "text",
    message: "Enter employee name:",
  },
  {
    type: "input",
    name: "text",
    message: "Enter employee name:",
  },
];

const continueQuestion = [
  {
    type: "confirm",
    name: "newMember",
    message: "Would you like to add another team member?",
  },
];
