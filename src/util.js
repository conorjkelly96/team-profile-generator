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
            <a href="${manager.email}" class="card-link text-decoration-none">${manager.email}</a>
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
        <a href="${intern.email}" class="card-link text-decoration-none">${intern.email}</a>
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
        <a href="${engineer.email}" class="card-link text-decoration-none">${engineer.email}</a>
        <a href="#" class="card-link text-decoration-none">GitHub: ${engineer.github}</a>
        </div>
        </div>
    </div>
    </div>`;
};

module.exports = {
  generateEngineerCard,
  generateInternCard,
  generateManagerCard,
};
