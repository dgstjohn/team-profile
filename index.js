const inquirer = require('inquirer')
const fs = require('fs');
const generateHTML = require('./src/page-template.js');
const employeeData = [];


const managerPrompt = () => {
    inquirer
        .prompt(
            [
                {
                    type: 'input',
                    name: 'employeeName',
                    message: "Please enter the team manager's name:",
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "Please enter the team manager's ID number:",
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "Please enter the team manager's email address:",
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: "Please enter the team manager's office number:",
                },
                {
                    type: 'list',
                    name: 'otherEmployees',
                    message: 'Do you want to add any other employees?',
                    choices: ['Engineer', 'Intern', "No, I'm done"],
                }
            ]
        )
        // function to push data into employeeData array
        .then((answer) => {
            if (answer.otherEmployees === 'Engineer') {
                engineerPrompt();
            }
            else if (answer.otherEmployees === 'Intern') {
                internPrompt();
            }
            else {

                // save data here and in other two functions
                generateHTML();
            }
        })
        .catch(err => {
            console.log(err);
        });
}

const engineerPrompt = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'employeeName',
                message: "Please enter the engineer's name:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the engineer's ID number:",
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the engineer's email address:",
            },
            {
                type: 'input',
                name: 'github',
                message: "Please enter the team manager's GitHub handle:",
            },
            {
                type: 'list',
                name: 'otherEmployees',
                message: 'Do you want to add any other employees?',
                choices: ['Engineer', 'Intern', "No, I'm done"],
            }
        ]
        )
        .then((answer) => {
            if (answer.otherEmployees === 'Engineer') {
                engineerPrompt();
            }
            else if (answer.otherEmployees === 'Intern') {
                internPrompt();
            }
            else {
                generateHTML();
            }
        })
        .catch(err => {
            console.log(err);
        });
};
const internPrompt = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'employeeName',
                message: "Please enter the intern's name:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Please enter the intern's ID number:",
            },
            {
                type: 'input',
                name: 'email',
                message: "Please enter the intern's email address:",
            },
            {
                type: 'input',
                name: 'school',
                message: "Please enter the name of the intern's school:",
            },
            {
                type: 'list',
                name: 'otherEmployees',
                message: 'Do you want to add any other employees?',
                choices: ['Engineer', 'Intern', "No, I'm done"],
            }
        ]
        )
        .then((answer) => {
            if (answer.otherEmployees === 'Engineer') {
                engineerPrompt();
            }
            else if (answer.otherEmployees === 'Intern') {
                internPrompt();
            }
            else {
                generateHTML();
            }
        })
        .catch(err => {
            console.log(err);
        });
};

managerPrompt();