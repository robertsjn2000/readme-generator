// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your name?',
    name: 'personName',
},
{
    type: 'input',
    message: 'What is the name of your projcet',
    name: 'title',
},
{
    type: 'list',
    message: 'Please select a license',
    name: 'license',
    choices: ["MIT", "GNU", "ISC", "Apache License 2.0", "No License"]
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
    message: 'How is the application used? Include link to deployed application',
    name: 'usageInstructions',
},
{
    type: 'input',
    message: 'List the features of your project.',
    name: 'features',
},
{
    type: 'input',
    message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
    name: 'contribution',
},
{
    type: 'input',
    message: 'Explain how to test your application',
    name: 'testInstructions',
},
{
    type: 'input',
    message: 'Enter your github username, your email. As well as any instructions on how someone should contact you with further questions or comments about your application',
    name: 'questions',
},
{
    type: 'input',
    message: 'List a table of contents for your ReadMe.',
    name: 'tableOfContents',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data,
        (err) => err ? console.log(error) : console.log(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response);
            const markdown = generateMarkdown(response);
            const fileName = `README.md`
            writeToFile(fileName, markdown)


        });
}

// Function call to initialize app
init();

