// TODO: Include packages needed for this application
var inquirer = require('inquirer')
var fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "What was your motivation?",
    "Why did you build this project?",
    "What problem does it solve?",
  "What did you learn?",
  "What makes your project stand out?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log(`README file ${fileName} has been successfully created.`);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'motivation',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'projectBuild',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'problemSolved',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'lessonsLearned',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'standoutFeatures',
            message: questions[4],
        },
    ])
    .then((answers) => {
        // Construct the README content using the user's answers
        const readmeContent = `
# Project Title

## Motivation
${answers.motivation}

## Project Build
${answers.projectBuild}

## Problem Solved
${answers.problemSolved}

## Lessons Learned
${answers.lessonsLearned}

## Standout Features
${answers.standoutFeatures}
`;

        // Specify the filename and write to the file
        const fileName = 'README.md';
        writeToFile(fileName, readmeContent);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}


// Function call to initialize app
init();


