// var commandLineArgs = process.argv;
// console.log(commandLineArgs);
// the result will show an array with two parameters: first, file path to where the Node is installed on the computer, second, file path for the file you execute

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// using the loop lets you print command line arguments one at a time
const printProfileData = profileDataArr => {
    // This here ...
    for (let i=0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log("==========");

    // is the same as this ...
    profileDataArr.forEach((profileItem) => {
        console.log(profileItem)
    });

    console.log("==========");

    // shorter arrow function since it only performs one action
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);                    