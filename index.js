const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./src/generateHTML");
const team = [];

const addManager = () => {
    return inquirer
        .prompt([
            {
                type:"input",
                message: "What is the team manager's name?",
                name: "name",
            },
            {
                type:"input",
                message: "What is the team manager's ID?",
                name: "id",
            },
            {
                type:"input",
                message: "What is the team manager's email address",
                name: "email",
            },
            {
                type:"input",
                message: "What is the team manager's office number?",
                name: "office",
            },
        ])
        .then((managerInput) => {
            const manager = new Manager(
                managerInput.name,
                managerInput.id,
                managerInput.email,
                managerInput.office
            );
            team.push(manager);
            teamSelect();
        });
};

const teamSelect = () => {
    return inquirer
        .prompt([
            {
                type: "list",
                message: "Are you adding more members to the team?",
                name: "select",
                choices: ["Add an engineer", "Add an intern", "No thank you"],
            },
        ])
        .then((userChoice) => {
            if (userChoice.select === "Add an engineer"){
                addEngineer();
            }
            else if(userChoice.select === "Add an intern"){
                addIntern();
            }
            else{
                createPage(team);
            }
        });
};

const addEngineer = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "What is the engineer's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the engineer's id?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the engineer's email address?",
                name: "email",
            },
            {
                type: "input",
                message: "What is the engineer's Github username?",
                name: "github",
            },
        ])
        .then((userChoice) => {
            const engineer = new Engineer(
                userChoice.name,
                userChoice.id,
                userChoice.email,
                userChoice.github
            );
            team.push(engineer);
            teamSelect();
        })  
}

const addIntern = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "What is the intern's name?",
                name: "name",
            },
            {
                type: "input",
                message: "What is the intern's id?",
                name: "id",
            },
            {
                type: "input",
                message: "What is the intern's email address?",
                name: "email",
            },
            {
                type: "input",
                message: "Where does the intern attend school?",
                name: "school",
            },
        ])
        .then((userChoice) = () => {
            const intern = new Intern(
                userChoice.name,
                userChoice.id,
                userChoice.email,
                userChoice.school
            )
            team.push(intern);
            teamSelect();
            
        })
}

function createPage(team){
    const page = generateHTML(team);
    fs.writeFile("dist/test.html", page, (err) =>
    err ? console.log(err) : console.log("Success!")
    );
}

function init(){
    addManager();
}

init();

