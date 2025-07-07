#!/usr/bin/env node
const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            name: 'action',
            type: 'list',
            message: 'Please select an action:',
            
        }
    ])