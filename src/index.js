// install dependencies
const inquirer = require("inquirer");
const utils = require("./util");
const {
  teamBuilderQuestions,
  employeeTypeQuestion,
  engineerQuestions,
  internQuestions,
  continueQuestion,
} = require("./questions");
const { writeToFile } = require("./file-gen");
const { Engineer, Intern } = require("./lib/index");

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
            <h1>Retail, Manufacturing & Wholesale Distribution</h1>
          </div>
        </nav> -->
      </header>
      <main>
        <div class="card-container">
          <div
            class="
              uk-card
              uk-card-default
              uk-width-1-2@m
              uk-card
              uk-card-secondary
              uk-card-hover
              uk-card-body
              uk-light
              uk-margin-medium
            "
          >
            <div class="uk-card-header">
              <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-auto">
                  <i class="fa-solid fa-screwdriver-wrench"></i>
                </div>
                <div class="uk-width-expand">
                  <h3 class="uk-card-title uk-margin-remove-bottom">
                    Conor Kelly
                  </h3>
                  <p class="uk-text-meta uk-margin-remove-top">Engineer</p>
                </div>
              </div>
            </div>
            <div class="uk-card-footer">
              <a href="#" class="uk-button uk-button-text">GitHub</a>
              <a href="#" class="uk-button uk-button-text">EID: 3286793</a>
              <a href="#" class="uk-button uk-button-text"
                >conorjkelly96@gmail.com</a
              >
            </div>
          </div>
  
          <div
            class="
              uk-card
              uk-card-default
              uk-width-1-2@m
              uk-card
              uk-card-secondary
              uk-card-hover
              uk-card-body
              uk-light
              uk-margin-medium
            "
          >
            <div class="uk-card-header">
              <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-auto">
                  <i class="fa-solid fa-graduation-cap"></i>
                </div>
                <div class="uk-width-expand">
                  <h3 class="uk-card-title uk-margin-remove-bottom">
                    Michael Jordan
                  </h3>
                  <p class="uk-text-meta uk-margin-remove-top">Intern</p>
                </div>
              </div>
            </div>
            <div class="uk-card-footer">
              <a href="#" class="uk-button uk-button-text">St. Benedict's</a>
              <a href="#" class="uk-button uk-button-text">EID: 3286793</a>
              <a href="#" class="uk-button uk-button-text">mj@soton.ac.uk</a>
            </div>
          </div>
  
          <div
            class="
              uk-card
              uk-card-default
              uk-width-1-2@m
              uk-card
              uk-card-secondary
              uk-card-hover
              uk-card-body
              uk-light
              uk-margin-medium
            "
          >
            <div class="uk-card-header">
              <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-auto">
                  <i class="fa-solid fa-screwdriver-wrench"></i>
                </div>
                <div class="uk-width-expand">
                  <h3 class="uk-card-title uk-margin-remove-bottom">
                    Severus Snape
                  </h3>
                  <p class="uk-text-meta uk-margin-remove-top">Manager</p>
                </div>
              </div>
            </div>
            <div class="uk-card-footer">
              <a href="#" class="uk-button uk-button-text"
                >Office Number: <span>012321199199</span></a
              >
              <a href="#" class="uk-button uk-button-text">EID: 3286793</a>
              <a href="#" class="uk-button uk-button-text">manager@oracle.com</a>
            </div>
          </div>
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

  while (inProgress) {
    const { employeeType } = await inquirer.prompt(employeeTypeQuestion);

    if (employeeType == "Engineer") {
      // CK 24/11: OBJECT DESTRUCTURING IS NOT WORKING IN THIS INSTANCE
      const { name, id, email, github } = await inquirer.prompt(
        engineerQuestions
      );
      const engineer = new Engineer({ name, id, email, github });
      console.log(engineer);
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

  console.log("answers", answers);
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
