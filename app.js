// var commandLineArgs = process.argv;
// console.log(commandLineArgs);
// the result will show an array with two parameters: first, file path to where the Node is installed on the computer, second, file path for the file you execute

const { fstat } = require("fs");

// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// // using the loop lets you print command line arguments one at a time
// const printProfileData = profileDataArr => {
//     // This here ...
//     for (let i=0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log("==========");

//     // is the same as this ...
//     profileDataArr.forEach((profileItem) => {
//         console.log(profileItem)
//     });

//     console.log("==========");

//     // shorter arrow function since it only performs one action
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };
// printProfileData(profileDataArgs);                    


// to access the methods of FS module, this declaration has to be present at the top of js file
const fs = require('fs');
 
// related statement - the expression needed to receive exported functions from the src file
const generatePage = require('./src/page-template.js');


//collecting command-line arguments and feeding them into the function to create a string with the user input
const profileDataArgs = process.argv.slice(2, process.argv.length);

// extracting command-line arguments to store them in distinct variables
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
// same thing as above but using 'assignment destructuring'
const [name, github] = profileDataArgs;



// using node module - file system to create a new file
fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
});