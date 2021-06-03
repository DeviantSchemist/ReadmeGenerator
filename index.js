const {prompt} = require('inquirer')
const {writeFile} = require('fs')

prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What is the title?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation instructions: '
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage information: '
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Contribution guidelines: '
  },
  {
    type: 'input',
    name: 'test',
    message: 'Test instructions: '
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'What license do you have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    type: 'input',
    name: 'username',
    message: 'Github username: '
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter email: ',
    validate: email => {
      // Regex mail check (return true if valid mail)
      return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)
    }
  }
])
.then(answers => {

  let readme = `
  # ${answers.title}

  ![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)

  ### Table of Contents
  [Description](https://github.com/DeviantSchemist/ReadmeGenerator#description)
  [Installation](https://github.com/DeviantSchemist/ReadmeGenerator#installation)
  [Usage](https://github.com/DeviantSchemist/ReadmeGenerator#usage)
  [Contribution](https://github.com/DeviantSchemist/ReadmeGenerator#contribution)
  [Tests](https://github.com/DeviantSchemist/ReadmeGenerator#tests)
  [Questions](https://github.com/DeviantSchemist/ReadmeGenerator#questions)

  # Description
  ${answers.description}

  # Installation
  ${answers.installation}

  # Usage
  ${answers.usage}

  # Contribution
  ${answers.contribution}

  # Tests
  ${answers.test}

  # Questions
  Github: [${answers.username}](https://github.com/${answers.username})
  Email: ${answers.email}
  `
  writeFile('README.md', readme, err => {
    if (err) {console.error(err)}
    else {
      console.log('Readme file successfully created!')
    }
  })
})
.catch(err => console.error(err))