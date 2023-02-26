// packages for application
const fs = require("fs");
const path = require('path');
// import inquirer from "inquirer";
const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:',
  },
  {
    type: 'input',
    name: 'Usage',
    message: "Provide the technologies used in your project?",
},
  {
    type: 'input',
    name: 'Contributors',
    message: "Provide any contributors. (Add GitHub usernames)",
},
{
  type: "input",
  message: "What is your Github username?",
  name: "User",
},
{
  type: "input",
  message: "What is your email address?",
  name: "Email",
},
{
  type: "input",
  message: "What is your full name?",
  name: "Name",
},
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?',
  },
  {
    type: 'list',
    message: 'Please choose a license for your project:',
    name: 'license',
    choices: ["None", "Apache License 2.0", "MIT License",
    "BSD 2-Clause License", "BSD 3-Clause License", 
    "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal",
    "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "Mozilla Public License 2.0", "The Unlicense"]
  },
  {
    type: 'input',
    name: 'test',
    message: 'Provide walkthrough of the required tests if applicable',
  },
  {
    type: 'input',
    name: 'Questions',
    message: "Do you have any questions about the project?",

},
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("README file generated successfully!");
    writeToFile('README-OUTPUT.md', generateMarkdown({ ...responses }));
  });
}

// function call to initialize program
init();
