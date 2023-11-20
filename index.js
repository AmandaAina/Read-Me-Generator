// TODO: Include packages needed for this application
var inquirer = require('inquirer')


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


inquirer.prompt([{
    name: 'apple',
    message: 'What would you like to say?',
    type: 'input',
},
{
    name: ''
}
])
.then(function(answer){
console.log(answer)
})