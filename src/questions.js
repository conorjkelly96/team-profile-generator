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
  {
    type: "list",
    message: "Select team member type",
    name: "employeeType",
    choices: [],
  },
];

const employeeTypeQuestion = [
  {
    type: "input",
    name: "text",
    message: "Enter payee:",
  },
  {
    type: "input",
    name: "amount",
    message: "Enter amount:",
  },
  {
    type: "datepicker",
    name: "date",
    message: "Due on:",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "text",
    message: "Enter payee:",
  },
  {
    type: "input",
    name: "amount",
    message: "Enter amount:",
  },
  {
    type: "datepicker",
    name: "date",
    message: "Due on:",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "text",
    message: "Enter payee:",
  },
  {
    type: "input",
    name: "amount",
    message: "Enter amount:",
  },
  {
    type: "datepicker",
    name: "date",
    message: "Due on:",
  },
];

const continueQuestion = [
  {
    type: "confirm",
    name: "text",
    message: "Enter payee:",
  },
];
