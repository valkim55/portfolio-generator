// var commandLineArgs = process.argv;
// console.log(commandLineArgs);
// the result will show an array with two parameters: first, file path to where the Node is installed on the computer, second, file path for the file you execute

//const fs = require("fs");

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




// // to access the methods of FS module, this declaration has to be present at the top of js file
// const fs = require('fs');
 
// // related statement - the expression needed to receive exported functions from the src file
// const generatePage = require('./src/page-template.js');

// //collecting command-line arguments and feeding them into the function to create a string with the user input
// const profileDataArgs = process.argv.slice(2, process.argv.length);

// // extracting command-line arguments to store them in distinct variables
// // const name = profileDataArgs[0];
// // const github = profileDataArgs[1];
// // same thing as above but using 'assignment destructuring'
// const [name, github] = profileDataArgs;

// // using node module - file system to create a new file
// fs.writeFile('./index.html', generatePage(name, github), err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });




// // declare FS variable to access the module
// const fs = require('fs');

// // related statement - to receive the exported function from the source (page-template) file
// const generatePage = require('./src/page-template.js');

// // generatePage will be called with name and github parameters
// const pageHTML = generatePage(name, github);

// // using the module create an index.html file using wirteFile method passing the relative path to the new file, function that created it and error handler
// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio created! Check out index.html to see the output!');
// });





const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template);

const promptUser = () => {
    // the function returns the running of inquirer.prompt() - which is a promise. then promise will resolve with a .then() method
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'enter your GitHub username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'provide some information about yourself: '
        }
    ])
};


const promptProject = portfolioData => {
    
    // if there is no 'projects' array property, create one and add it to portfolioData object
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`
====================
Add a New Project 
====================
`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'provide a description of the project (required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'what did you build this project with? (check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'enter the GitHub link to your project (required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if(projectData.confirmAddProject) {

            // if portfolioData is not included in the argument, a new project array will be initialized and existing project data will be lost
            return promptProject(portfolioData);
        } else {

            // if user prompts NO to creating another project then we return portfolioData and create an HTML page based on users answer
            return portfolioData;
        }
    });
};

// append .then() method to the function call, since the function returns a Promise, we put into .then() whatever we wish to take place after the Promise is resolved
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });