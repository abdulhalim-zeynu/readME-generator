const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "username",
        message: "Enter your GitHub username: "
      },{
        type: "input",
        name: "email",
        message: "Enter your email address: "
      },
      {
        type: "input",
        name: "title",
        message: "Enter project name: "
      },
      {
        type: "input",
        name: "desc",
        message: "Short description of project: "
      },
      {
        type: "list",
        name: "license",
        message: "Type of license (MIT): ",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        default: "MIT"
      },
      {
        type: "input",
        name: "install",
        message: "Command to install dependencies (npm i): ",
        default: "npm i"
      },
      {
        type: "input",
        name: "test",
        message: "Command to run tests (npm test): ",
        default: "npm test"
      },
      {
        type: "input",
        name: "usage",
        message: "Usage information for users: ",
      },
      {
        type: "input",
        name: "contributing",
        message: "Contribution guidelines for developers: ",
      }
];

// function to write README file
function writeToFile(fileName, data) {
    const write = fs.writeFileSync(fileName, data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(answers => {
        const data = generateMarkdown(answers)
        writeToFile("README.md", data)
        console.log("Generated README file in working directory")
    })
}

// function call to initialize program
init();
