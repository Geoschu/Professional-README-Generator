// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from "./utils/generateMarkdown";


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you located?'
    },
    {
      type: 'input',
      name: 'bio',
      message: 'Tell us a bit about yourself.'
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub URL.'
    }
  ];
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
