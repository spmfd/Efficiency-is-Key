const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([
    {
       type: 'input',
       message: 'What is the title of your Project?',
       name: 'title',
     },
     {
       type: 'input',
       message: 'What was your motivation for starting this project?',
       name: 'motivation',
     },
     {
       type: 'input',
       message: 'Why did you build this project?',
       name: 'why',
     },
     {
       type: 'input',
       message: 'What problems were solved with your project?',
       name: 'solution',
     },
     {
       type: 'input',
       message: 'What problems did you encounter and what did you learn?',
       name: 'problems',
     },
     {
        type: 'input',
        message: 'Any Installation? If yes, please provide instructions',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What is the deployment link URL?',
        name: 'link',
      },
      {
        type: 'input',
        message: 'What is the path to your screenshot image?',
        name: 'screenshot',
      },
    ])
    
    
    .then((response) =>
    fs.writeFile('ReadME.md', generateREADME(response), (err) =>
    err ? console.error(err) : console.log('Commit logged!')
    ));


const generateREADME = function README(response) {
return `
# ${response.title}

## Description


${response.motivation}

${response.why}

${response.solution}

${response.problems}

## Installation

Installation required: ${response.installation}

Deployed website URL: ${response.link}

![website image](${response.screenshot})

## Credits

#License


`;}
