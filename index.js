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
    name: 'table',
    message: 
  }
])