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
  }
])