#!/usr/bin/env node
const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            name: 'action',
            type: 'list',
            message: 'Please select an action:',
            choices: ['create a new note', 'view/edit a note', 'delete a note'],
        },{
            name: 'create-title',
            type: 'input',
            message: 'What is this note called?',
            when: (res) => res.action === 'create a new note',
        },{
            name: 'create-content',
            type: 'input',
            message: 'Enter your note',
            when: (res) => res.action === 'create a new note',
        },{
            name: 'select-note',
            type: 'list',
            message: 'select a note',
            choices: getNotes(),
        }
    ])
    .then((res) => {
        console.log(res)
    })

    function getNotes(){
        return fs.readdirSync('./notes-folder');
    }

    