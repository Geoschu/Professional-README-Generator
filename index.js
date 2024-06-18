// Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description for your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions.",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information.",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your application.",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter contribution guidelines.",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter test instructions.",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address.",
  },
];

let counter = 0;

// Function to write README file
function writeToFile(data) {
  const fileName = `output/README${counter}.md`;
  fs.writeFileSync(fileName, generateMarkdown(data));
  counter++;
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile(answers);
  });
}

// Function call to initialize app
init();
