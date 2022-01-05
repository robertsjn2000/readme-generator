// TODO: Include packages needed for this application
const inquirer = require('inquirer');


    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'personName',
        },
        {
            type: 'input',
            message: 'What is the name of your projcet',
            name: 'projectName',
        },
        {
            type: 'list',
            message: 'Please select a license',
            name: 'licenses',
            choices: ["MIT", "The Unlicense", "ISC", "Artist Unknown License 2.0", "Apache License 2.0"]
        },
        {
            type: 'input',
            message: 'What is your GutHub username',
            name: 'userName',
        },
        {
            type: 'input',
            message: 'Describe your project.',
            name: 'projectDescription',
        },
        {
            type: 'input',
            message: 'Provide Instalation instructions.',
            name: 'instalationInstructions',
        },
        {
            type: 'input',
            message: 'List Aany contributors along with their Github usenames',
            name: 'contributorList',
        },
        {
            type: 'input',
            message: 'How is the application used?',
            name: 'usageInstructions',
        },
    ])
    .then((response)=> {
        console.log(response);
        const fileName = `${response.personName.toLowerCase().split(' ').join('')}.md`

        FileSystem.appendFile(fileName, JSON.stringify(response),
        )
    })
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

