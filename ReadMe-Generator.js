const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([
    {
       type: 'input',
       message: 'What is your user name?',
       name: 'Name',
     },
     {
       type: 'input',
       message: 'Where are you located?',
       name: 'location',
     },
     {
       type: 'input',
       message: 'Tell me something about yourself',
       name: 'bio',
     },
     {
       type: 'input',
       message: 'What is your Linked in URL?',
       name: 'Linkedin',
     },
     {
       type: 'input',
       message: 'What is your GitHub repo URL?',
       name: 'Github',
     },
    ])
    
    
    .then((response) =>
    fs.writeFile('ReadME.md', generateREADME(response), (err) =>
    err ? console.error(err) : console.log('Commit logged!')
    ));


const generateREADME = function README(response) {
return `
# <Your-Project-Title>

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Installation

![website image](XXXXXXXXX)

## Credits

#License


`;}
