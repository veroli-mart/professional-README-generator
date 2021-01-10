// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { title } = require("process");
const generateMarkdown = require("./utils/generateMarkdown.js");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of your project? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter your projects name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "What does your project do? (Required)",
      validate: (descripInput) => {
        if (descripInput) {
          return true;
        } else {
          console.log("Please describe your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installCmd",
      message: "What command do you use to install the project? (Required)",
      validate: (inscmdInput) => {
        if (inscmdInput) {
          return true;
        } else {
          console.log("Please enter the command used to install your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "What is the command to run your project? (Required)",
      validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Please enter the command needed to run your project!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "What license would you like for your project?",
      choices: ["MIT", "Apache", "Mozilla", "GNU"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Can people contribute to this project, if so, how? (Required)",
      validate: (titleInput) => {
        if (titleInput) {
          return true;
        } else {
          console.log("Please enter if people can contribute!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "testCmd",
      message: "What is the command needed to run tests? (Required)",
      validate: (tstcmdInput) => {
        if (tstcmdInput) {
          return true;
        } else {
          console.log("Please enter the command to test your project!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email? (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "username",
      message: "What is your Github username? (Required)",
      validate: (usernameInput) => {
        if (usernameInput) {
          return true;
        } else {
          console.log("Please enter your Github username!");
          return false;
        }
      },
    },
  ])
  .then(function (promptAnswers) {
    fs.writeFile(
      "./dist/generateREADME.md",
      generateMarkdown(promptAnswers),
      function (err) {
        if (err) return console.log(err);

        console.log("Check out your created README!");
      }
    );
  });
