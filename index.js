// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the Title of your project?",
        name: 'title',
      },
      {
        type: 'input',
        message: "What is the description of your project?",
        name: 'description',
      },
    {
        type: 'input',
        message: "What are the installation instructions?",
        name: 'installation',
      },
      {
        type: 'input',
        message: "What is the usage of this project?",
        name: 'usage',
     },
     {
       type: 'input',
       message: "What are the contribution guidelines?",
       name: 'contributing',
     },
     {
       type: 'input',
       message: "What are the test instructions?",
       name: 'tests',
     },
     {
       type: 'list',
       message: "Which license do you want to use?",
       name: 'license',
       choices:['Apache', 'MIT', 'BSD3', 'Boost', 'Eclipse', 'GNUv3', 'Mozilla', 'Unlicense'],
     },
     {
        type: 'input',
        message: "What is your Email address?",
        name: 'email',
     },
     {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'github',
     }
];   


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   console.log(data)

//     fs.writeFile('README.md', data, function (err) {
//         err ? console.log(err) : console.log("README created!")
//     });
// }

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers)
      fs.writeFile('README.md', markdown, function (err) {
        err ? console.log(err) : console.log("README created!")
    });
  })
  .catch((error) => {
    console.log(error)
  })
}

// Function call to initialize app
init()

// function init() {
//   inquirer.prompt(questions)
//   .then (answers => writeToFile(generateMarkdown(answers)))
// }