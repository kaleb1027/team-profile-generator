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
            if (userChoice)
        })
}

