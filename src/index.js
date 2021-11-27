// install dependencies
const inquirer = require("inquirer");
const {
  generateEngineerCard,
  generateInternCard,
  generateManagerCard,
} = require("./util");
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

// generating Read Me document
const generateHTMLfile = (answers) => {
  return `
  <!-- mockup html -->
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Team Profile</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
        integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.9.3/css/uikit-core-rtl.min.css"
        integrity="sha512-gfpvWpj7EwgKjxRPJ4j3QPtajmzr9JsjqecWBvw+CptfbkwKQC9dLWyuptQu0zjm0CZlOpN0Iepiiu42a+hO8Q=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <link rel="stylesheet" href="./styles.css" />
    </head>
    <body>
      <header>
        <!-- <nav class="uk-navbar-container" uk-navbar>
          <div class="uk-navbar-left uk-section-secondary">
            <h1>${answers.teamName}</h1>
          </div>
        </nav> -->
      </header>
      <main>
        <div class="card-container">
         ${generateManagerCard(answers)}
        </div>
      </main>
      <footer></footer>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.9.3/js/uikit.min.js"
        integrity="sha512-RfhlrME9FdpSmg487eVuOOGGMjtiwzR4Gd+/h+9bqukMBg4B0X/o045jLCcf+XjYlcmEVGYIkDgYtj9zNaaigg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
    </body>
  </html>
  
  `;
};

// initialize user interaction
const init = async () => {
  // prompt Main Questions
  let inProgress = true;
  const teamMembers = [];

  const answers = await inquirer.prompt(teamBuilderQuestions);
  const { name, id, email, officeNumber } = await inquirer.prompt(
    managerQuestion
  );
  const manager = new Manager({ name, id, email, officeNumber });
  teamMembers.push(manager);

  while (inProgress) {
    const { employeeType } = await inquirer.prompt(employeeTypeQuestion);

    if (employeeType == "Engineer") {
      // CK 24/11: OBJECT DESTRUCTURING IS NOT WORKING IN THIS INSTANCE
      const { name, id, email, github } = await inquirer.prompt(
        engineerQuestions
      );
      const engineer = new Engineer({ name, id, email, github });
      teamMembers.push(engineer);
    }

    if (employeeType == "Intern") {
      // CK 24/11: OBJECT DESTRUCTURING IS NOT WORKING IN THIS INSTANCE
      const { name, id, email, school } = await inquirer.prompt(
        internQuestions
      );
      const intern = new Intern({ name, id, email, school });
      teamMembers.push(intern);
    }

    const anotherEmployee = await inquirer.prompt(continueQuestion);
    console.log(teamMembers);
    if (!anotherEmployee.newMember) {
      inProgress = false;
      // DO I HAVE TO RETURN TEAM MEMBERS, CONSTRUCT ANOTHER OBJECT WITH THE ANSWERS AND PUSH THAT TO FINAL ANSWER?
    }
  }

  // DO I HAVE TO RETURN TEAM MEMBERS, CONSTRUCT ANOTHER OBJECT WITH THE ANSWERS AND PUSH THAT TO FINAL ANSWER?
  console.log("teamMembers", teamMembers);

  // generate HTML file
  const htmlPage = generateHTMLfile(answers);

  // HTML file generated
  writeToFile("./dist/index.html", htmlPage);
  console.log("HTML Webpage Creation = Successful");
  process.exit(0);
};

init();
