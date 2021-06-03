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
    choices: ['ah', 'bah', 'cah']
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
  console.log(answers)
})
.catch(err => console.error(err))