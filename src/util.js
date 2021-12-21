const { Engineer, Intern, Manager } = require("./lib/index");

const validateEmail = (email) => {
  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
    email
  );
};

// generate manager card
const generateManagerCard = (manager) => {
  return `<div class="col">
    <div class="card" style="width: 18rem">
        <div class="card-body">
        <h5 class="card-title">${manager.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager 👨‍🏫</h6>
        <h6 class="card-subtitle mb-2 text-muted">${manager.id}</h6>
        <p class="card-text">
            If you'd like to get in touch or have issues regarding
            escalations, please reach out to me below.
        </p>
        <div class="d-flex flex-row flex-wrap justify-content-center">
            <a href="mailto:${manager.email}" class="card-link text-decoration-none">${manager.email}</a>
            <a href="#" class="card-link text-decoration-none">${manager.officeNumber}</a>
        </div>
        </div>
    </div>
    </div>`;
};

// generate intern card
const generateInternCard = (intern) => {
  return `<div class="col">
    <div class="card" style="width: 18rem">
        <div class="card-body">
        <h5 class="card-title">${intern.name} </h5>
        <h6 class="card-subtitle mb-2 text-muted">Intern 🧑🏽‍🎓</h6>
        <h6 class="card-subtitle mb-2 text-muted">${intern.id}</h6>
        <p class="card-text">
            Hi there! If you'd like to get in touch, please reach out to
            me below.
        </p>
        <div class="d-flex flex-row flex-wrap justify-content-center">
        <a href="mailto:${intern.email}" class="card-link text-decoration-none">${intern.email}</a>
        <a href="#" class="card-link text-decoration-none">College: ${intern.school}</a>
        </div>
        </div>
    </div>
    </div>`;
};

// generate engineer card
const generateEngineerCard = (engineer) => {
  return `<div class="col">
    <div class="card" style="width: 18rem">
        <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Engineer 🧑‍🔬</h6>
        <h6 class="card-subtitle mb-2 text-muted">${engineer.id}</h6>
        <p class="card-text">
            Want to check out my work and collaborate on a new project?
            Click the links below!
        </p>
        <div class="d-flex flex-row flex-wrap justify-content-center">
        <a href="mailto:${engineer.email}" class="card-link text-decoration-none">${engineer.email}</a>
        <a href="https://www.github.com/${engineer.github}" class="card-link text-decoration-none">GitHub: ${engineer.github}</a>
        </div>
        </div>
    </div>
    </div>`;
};

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
          <title>Welcome to ${teamName}</title>
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
                    <h4 class="text-white">${teamName}</h4>
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
                  <strong>${teamName}</strong>
                </a>
              </div>
            </div>
          </header>
      
          <main>
            <section class="py-5 text-center container">
              <div class="row py-lg-5">
                <div class="mx-auto">
                  <h1 class="fw-light">🎉 Welcome to ${teamName}! 🎉</h1>
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

module.exports = {
  generateHTMLfile,
  validateEmail,
};
