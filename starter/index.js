const fs = require("fs");
const path = require('path');
// const inquirer = require("inquirer");
import inquirer from "inquirer";
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
    name: 'title',
    message: 'What is the title of your project?',
}, 
[ {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
}, 
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
}, 
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
}, 
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
}, 

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
