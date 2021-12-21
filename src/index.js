// install dependencies
const inquirer = require("inquirer");

// importing questions, util functions & classes
const { generateHTMLfile } = require("./util");
const {
  teamBuilderQuestions,
  employeeTypeQuestion,
  engineerQuestions,
  internQuestions,
  continueQuestion,
  managerQuestion,
} = require("./questions");
const { writeToFile } = require("./file-gen");
const { Engineer, Intern, Manager } = require("./lib/index");

// initialize user interaction
const init = async () => {
  // prompt Main Questions
  let inProgress = true;
  const teamMembers = [];

  const { teamName } = await inquirer.prompt(teamBuilderQuestions);
  const { name, id, email, officeNumber } = await inquirer.prompt(
    managerQuestion
  );
  const manager = new Manager({ name, id, email, officeNumber });
  teamMembers.push(manager);

  while (inProgress) {
    const { employeeType } = await inquirer.prompt(employeeTypeQuestion);

    if (employeeType == "Engineer") {
      const { name, id, email, github } = await inquirer.prompt(
        engineerQuestions
      );
      const engineer = new Engineer({ name, id, email, github });
      teamMembers.push(engineer);
    }

    if (employeeType == "Intern") {
      const { name, id, email, school } = await inquirer.prompt(
        internQuestions
      );
      const intern = new Intern({ name, id, email, school });
      teamMembers.push(intern);
    }

    const anotherEmployee = await inquirer.prompt(continueQuestion);
    if (!anotherEmployee.newMember) {
      inProgress = false;
    }
  }

  // generate HTML file
  const htmlPage = generateHTMLfile(teamName, teamMembers);
  console.log(teamName);

  // HTML file generated
  writeToFile("./dist/index.html", htmlPage);
  console.log("Team Webpage Successfully Created 🎉🎉🎉");
  process.exit(0);
};

init();
