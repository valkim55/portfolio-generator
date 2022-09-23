const fs = require('fs');



const writeFile = fileContent => {

    // inside the () for the new promise provide it with a function that takes 2 parameters: resolve (if the code executes successfully) and reject (if the code fails to execute successfully)
    return new Promise((resolve, reject) => {

        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's .catch() method
            if (err) {
                reject(err);

                // return out of the function here to make sure that the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data ot the .then() method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};


const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if(err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File successfully copied!'
            });
        });
    })
}


module.exports = { writeFile, copyFile };