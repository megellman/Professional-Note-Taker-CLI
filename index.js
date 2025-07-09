#!/usr/bin/env node
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
            choices: ['append note', 'delete note', 'view note'],
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
        let file;
        if(res.changes === 'view note'){
            file = path.join(directory, res.selectNote);
            fs.readFile(file, 'utf8', (err, data) => {
                if(err) console.error(err);
                console.log(res.selectNote + ':\n', data);
            })
        } else if(res.action === 'create a new note'){
            file = path.join(directory,res.createTitle).toLowerCase();
            fs.writeFile(file + '.txt', res.createContent, 'utf8', (err) => {
                if(err) console.error(err);
                console.log('file created!');
            });
        } 
        if(res.changes === 'delete note'){
            file = path.join(directory, res.selectNote);
            fs.unlink(file, (err) => {
                if(err) console.error(err);
                console.log('file deleted!');
            });
        } else if(res.changes === 'append note'){
            file = path.join(directory, res.selectNote);
            fs.appendFile(file, '\n' + res.appendNote, (err) => {
                if(err) console.error(err);
                console.log('file appended!');
            })
        }
    })

    function getNotes(){
        return fs.readdirSync(directory);
    }