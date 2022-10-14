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

## Table of Contents

[Installation](#installation)
[Usage](#usage)
[Credit](#credits)
[License](#license)
[Tests](#tests)
[Questions](#questions)

## Installation

Installation required: ${response.installation}

Deployed website URL: ${response.link}

## Usage

Provide instructions and examples for use.

![website image](${response.screenshot})

## Credits

Collaborators and their associated GitHub profiles: 

List your collaborators, if any, with links to their GitHub profiles.

Third-party assets used: 

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

Tutorials used: 

If you followed tutorials, include links to those here as well.


## License



## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Questions

For correspondence over email: 

GitHUB User name:

`;}
