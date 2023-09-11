const numsLS = require('./functions/numsList');

// Get user input of the terminal
const args = process.argv.slice(2);
try {
    // Look for missing parameters
    if (args.length < 1) {
        throw new Error('Missing values on the command parameters')
    }

    var response;
    // Parse list of numbers given by the user
    let nums = JSON.parse(args[1]);
    
    // Check option and call correct function for each problem 
    switch (args[0]) {
        case 'p1':
            response = numsLS.findMissingNumsList(nums);
            break;
        case 'p2':
            // Check missing target
            if (args.length < 3) {
                throw new Error('Missing values on the command parameters');
            }
            response = numsLS.findIndexTwoSum(nums, parseInt(args[2]));
            break;
        default:
            throw new Error('Please enter a valid option to execute the proper function over your numbers list');
    }
    console.log(response)
} catch (error) {
    console.log('ERROR: ' + error.message + '\n\n$ npm start [p1p2] [list_of_integers] [target] \n\nExamples\n$ npm start p1 [1,1]\n$ npm start p2 [3,2,4] 6\n\nSee README.md for help.');
}