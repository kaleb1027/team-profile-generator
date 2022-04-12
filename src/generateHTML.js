//HTML creation for different team members
const managerHTML = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.office}</p>
            </div>
        </div>
    </div>
    `;

}

const engineerHTML = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
};

const internHTML = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
    </div>
    `
};

//loops through team array to append HTML snippets to the base template
generateHTML = (data) => {
    const teamArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === "Manager") {
            const manager = managerHTML(employee);
            teamArray.push(manager);
        }
        else if (role === "Engineer") {
            const engineer = engineerHTML(employee);
            teamArray.push(engineer);
        }
        else if (role === "Intern") {
            const intern = internHTML(employee);
            teamArray.push(intern);
        }


    }

    const employees = teamArray.join("");
    const generateTeam = generateTeamHTML(employees);
    return generateTeam;
}

//base HTML template
const generateTeamHTML = function (employees) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="Description" content="Enter your description here" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
      <script src="https://kit.fontawesome.com/0d277fa621.js" crossorigin="anonymous"></script>
      <title>Team Profile</title>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid bg-dark">
            <div class="container">
            <h1 class="display-4 align-content-center text-center bg-dark ">Team Profile Generator</h1>
        
            </div>
        </div>
        <div class="row">
        ${employees}
        </div>
    </body>
    </html>`
}

module.exports = generateHTML;