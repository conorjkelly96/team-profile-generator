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

const generateHTMLfile = (teamName, teamMembers) => {
  const generateCard = (teamMember) => {
    if (teamMember instanceof Engineer) {
      return generateEngineerCard(teamMember);
    }

    if (teamMember instanceof Intern) {
      return generateInternCard(teamMember);
    }

    if (teamMember instanceof Manager) {
      return generateManagerCard(teamMember);
    }
  };
  const teamMemberCards = teamMembers.map(generateCard);

  const cardSection = teamMemberCards.join("");
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta
          name="author"
          content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
        />
        <meta name="generator" content="Hugo 0.88.1" />
        <title>Welcome to ${teamName.teamName}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
          integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="./styles.css" />
    
        <style>
          .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
          }
    
          @media (min-width: 768px) {
            .bd-placeholder-img-lg {
              font-size: 3.5rem;
            }
          }
        </style>
      </head>
      <body>
        <header>
          <div class="collapse bg-dark" id="navbarHeader">
            <div class="container">
              <div class="row">
                <div class="col-sm-8 col-md-7 py-4">
                  <h4 class="text-white">${teamName.teamName}</h4>
                  <p class="text-muted">
                    Add some information about the album below, the author, or any
                    other background context. Make it a few sentences long so folks
                    can pick up some informative tidbits. Then, link them off to
                    some social networking sites or contact information.
                  </p>
                </div>
                <div class="col-sm-4 offset-md-1 py-4">
                  <h4 class="text-white">Contact</h4>
                  <ul class="list-unstyled">
                    <li><a href="#" class="text-white">Follow on Twitter</a></li>
                    <li><a href="#" class="text-white">Like on Facebook</a></li>
                    <li><a href="#" class="text-white">Email me</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container">
              <a href="#" class="navbar-brand d-flex align-items-center">
                <i class="fas fa-users"></i>
                <strong>${teamName.teamName}</strong>
              </a>
            </div>
          </div>
        </header>
    
        <main>
          <section class="py-5 text-center container">
            <div class="row py-lg-5">
              <div class="mx-auto">
                <h1 class="fw-light">🎉 Welcome to ${teamName.teamName}! 🎉</h1>
                <p class="lead text-muted">
                  Our team members are below, if you like the look of us and you
                  think we can work together, why not fire over an email? 🚀
                </p>
              </div>
            </div>
          </section>
  
            <div class="album py-5 bg-light">
            <div class="container">
              <div class="d-flex flex-row flex-wrap">${cardSection}</div>
            </div>
          </div>
        </main>
    
        <footer class="text-muted py-5 bg-dark">
          <div class="container text-center text-white">
            <p class="mb-1">
              Team Profile Generator, made by
              <a href="https://github.com/conorjkelly96">Conor Kelly</a>.
            </p>
          </div>
        </footer>
    
        <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
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
  const htmlPage = generateHTMLfile(answers, teamMembers);

  // HTML file generated
  writeToFile("./dist/index.html", htmlPage);
  console.log("Team Webpage Successfully Created 🎉🎉🎉");
  process.exit(0);
};

init();
