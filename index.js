// require basic dependencies
const inquirer = require('inquirer')
const fs = require('fs');

// require constructor classes
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// require module pages
const generateHTML = require('./src/page-template.js');
const { writeFile, copyFile } = require('./src/generateHTML.js');

// prompt for info for single team manager
const promptManager = () => {
    return inquirer
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
                }
            ]
        )
        // return the answers
        .then(answers => {
            console.log(answers);
            return answers;
        }
        )
        // then go to the prompt for other employees
        .then(promptOtherEmployee)
        .catch(err => {
            console.log(err);
        });
};

const promptOtherEmployee = () => {
    return inquirer
        .prompt(
            {
                type: 'list',
                name: 'otherEmployees',
                message: 'Do you want to add any other employees?',
                choices: ['Engineer', 'Intern', "No, I'm done"],
            }
        )
        .then(answers => {
            if (answers.choices === 'Engineer') {
                promptEngineer();
            }
            else if (answers.choices === 'Intern') {
                promptIntern();
            }
            else {
                generateHTML()
                    .then(pageHTML => {
                        return writeFile(pageHTML);
                    })
                    .then(writeFileResponse => {
                        console.log(writeFileResponse);
                        return copyFile();
                    })
                    .then(copyFileResponse => {
                        console.log(copyFileResponse);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        })
};

const promptEngineer = answers => {
    if (!answers.list) {
        answers.list = [];
    }
    return inquirer
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
                message: "Please enter the engineer's GitHub handle:",
            },
            {
                type: 'confirm',
                name: 'anotherEngineer',
                message: 'Do you want to add another engineer?',
                default: false
            }
        ]
        )
        .then(answer => {
            if (anotherEngineer.default = true) {
                engineerData.list.push(answer);
                console.log(engineerData.list);
                promptOtherEmployee();
            }
            else {
                engineerData.list.push(answer);
                promptEngineer();
            }
        })
        .catch(err => {
            console.log(err);
        });
};

const promptIntern = internData => {
    if (!internData.list) {
        internData.list = [];
    }
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
                message: "Please enter the name of the intern's college:",
            },
            {
                type: 'confirm',
                name: 'anotherIntern',
                message: 'Do you want to add another intern?',
                default: false
            }
        ]
        )
        .then((answer) => {
            if (anotherIntern.default = true) {
                internData.list.push(answer);
                promptOtherEmployee();
            }
            else {
                internData.list.push(answer);
                promptManager();
            }
        })
        .catch(err => {
            console.log(err);
        });
};

promptManager();