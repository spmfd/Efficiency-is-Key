const inquirer = require('inquirer')
const fs = require('fs')


// Questions to create ReadME file

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
      {
        type: 'input',
        message: 'Please state who you collaborated with for this project',
        name: 'collaborator',
      },
      {
        type: 'input',
        message: 'What is the collaborators GitHub profile URL?',
        name: 'collabgit',
      },
      {
        type: 'input',
        message: 'What did they assist you with for this project?',
        name: 'collabwhat',
      },
      {
        type: 'input',
        message: 'Please state (if any) third-party assets used in the creation of this project?',
        name: 'thirdparty',
      },
      {
        type: 'input',
        message: 'If any third-party assets were used, what are their associated URLs?',
        name: 'thirdpartyurl',
      },
      {
        type: 'input',
        message: 'List the tutorials used, if any?',
        name: 'tutorial',
      },
      {
        type: 'input',
        message: 'URL for tutorials used?',
        name: 'tutorialurl',
      },
      {
        type: 'input',
        message: 'What you learned from these tutorials that helped with your project?',
        name: 'tutorialwhat',
      },
      {
        type: "list", 
        message: "Choose the license you will be using: ",
        choices: ['MIT', 'Mozilla', 'Unlicense', 'None'],
        name: "license", 
      },
      {
        type: 'input',
        message: 'Examples of necessary tests to get desired results from project',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'What is the email you would like to use for future feedback/questions?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is your Github usernam?',
        name: 'githubun',
      },
    ])
    
    
    .then((response) =>
    fs.writeFile('ReadME.md', generateREADME(response), (err) =>
    err ? console.error(err) : console.log('Commit logged!')
    ));

    // Creating a const associated with license badge URLs

  function licenseBadge(license) {
    const badges = {
      MIT: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
      Mozilla: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
      Unlicense: `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    }
    return badges[license]
  }


  // Code for all of ReadME file generation

const generateREADME = function README(response) {
return `
# ${response.title}

${licenseBadge(response.license)}

## Description


${response.motivation}

${response.why}

${response.solution}

${response.problems}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credit](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

Installation required: ${response.installation}

Deployed website URL: ${response.link}

## Usage

Provide instructions and examples for use.

![website image](${response.screenshot})

## Credits

Collaborators: ${response.collaborator}

GitHub Profile Links: ${response.collabgit}

Help provided: ${response.collabwhat}


Third-party assets used: ${response.thirdparty}

Creators of third-party assets: ${response.thirdpartyurl}

Tutorials used: ${response.tutorial}

URL for resources:${response.tutorialurl}

Help Provided:${response.tutorialwhat}

## License

License used in Repo: ${response.license}

## Tests

Any Tests needed to create the desired results: ${response.tests}

## Questions

For correspondence over email: ${response.email}

GitHUB User name: ${response.githubun}

`;}
