// generate manager card
const generateManagerCard = () => {
  return `<div
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
    </div>`;
};

// generate intern card
const generateInternCard = () => {
  return `<div
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
    </div>`;
};

// generate engineer card
const generateEngineerCard = () => {
  return `<div
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
    </div>`;
};

module.exports = {
  generateEngineerCard,
  generateInternCard,
  generateManagerCard,
};
