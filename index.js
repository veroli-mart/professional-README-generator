// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "What does your project do?",
    },
    {
      type: "input",
      name: "installCmd",
      message: "What command do you use to install the project?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the command to run your project?",
    },
    {
      type: "list",
      name: "license",
      message: "What license would you like for your project?",
      choices: ["MIT", "Apache", "Mozilla", "GNU GPLv3"],
    },
    {
      type: "input",
      name: "contributing",
      message: "How can people contribute to this project?",
    },
    {
      type: "input",
      name: "testCmd",
      message: "What is the command needed to run the tests?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "username",
      message: "What is your Github username",
    },
  ])
  .then(function (promptAnswers) {
    fs.writeFile(
      "generateREADME.md",
      generateMarkdown(promptAnswers),
      function (err) {
        if (err) return console.log(err);

        console.log("Check out your created README!");
      }
    );
  });
