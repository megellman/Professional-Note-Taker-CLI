#!/usr/bin/env node
const { error } = require('console');
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

const directory = path.join('notes-folder');

inquirer
    .prompt([
        {
            name: 'action',
            type: 'list',
            message: 'Please select an action:',
            choices: ['create a new note', 'view notes'],
        },{
            name: 'createTitle',
            type: 'input',
            message: 'What is this note called?',
            when: (res) => res.action === 'create a new note',
        },{
            name: 'createContent',
            type: 'input',
            message: 'Enter your note',
            when: (res) => res.action === 'create a new note',
        }, {
            name: 'selectNote',
            type: 'list',
            message: 'select a note',
            when: (res) => res.action === 'view notes',
            choices: getNotes(),
        },{
            name: 'changes',
            type: 'list',
            message: 'select an action',
            choices: ['append note', 'delete note'],
            when: (res) => res.action === 'view notes',
        },{
            name: 'appendNote',
            type: 'input',
            message: 'Add to your note',
            when: (res) => res.changes === 'append note',
        }
    ])
    .then((res) => {
        console.log(res);

        if(res.action === 'view notes'){
            fs.readFile(res.selectNote, 'utf8', (err, data) => {
                if(err) throw error;
                console.log(data);
            })
        } else if(res.action === 'create a new note'){
            let file = (`${directory}/${res.createTitle}.txt`).toLowerCase();
            fs.writeFile(file, res.createContent, 'utf8', (err) => {
                if(err) throw error;
                console.log('file created!');
            });
        } else if(res.changes === 'delete note'){
            fs.unlink(res.SelectNote, (err) => {
                if(err) throw error;
                console.log('file deleted!');
            });
        } else if(res.changes === 'append note'){
            fs.appendFile(res.selectNote, res.appendNote, (err) => {
                if(err) throw error;
                console.log('file appended!');
            })
        }
    })

    function getNotes(){
        return fs.readdirSync('./notes-folder');
    }

    