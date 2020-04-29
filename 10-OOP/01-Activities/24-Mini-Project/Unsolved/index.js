const inquirer = require('inquirer');
const axios = require('axios');
const Word = require('./word');

function askUserEnterLetter() {
    inquirer.prompt([
        {
            type: "input",
            message: "ENTER ONE LETTER",
            name: "guess"
        }
    ]).then(function (res) {
        return res.guess;
    });
};
// function askUserEnterLetter() {
//     return new Promise(resolve => {
//         inquirer.prompt([
//             {
//                 type: "input",
//                 message: "ENTER ONE LETTER",
//                 name: "guess"
//             }
//         ]).then(function (res) {
//             resolve(res.guess);
//         });
//     });
// };

function getUser() {
    try {
        const response = axios.get("http://random-word-api.herokuapp.com/word?number=1");
        console.log(response.data);

        const word1 = new Word(response.data.toString());

        word1.placeholder();

        let counter = 0;
        while (counter < 3) {
            let guess = askUserEnterLetter();
            console.log(guess);
            word1.guessLetter(guess);
            counter++;
        }

    } catch (error) {
        console.error(error);
    }
}
// async function getUser() {
//     try {
//         const response = await axios.get("http://random-word-api.herokuapp.com/word?number=1");
//         console.log(response.data);

//         const word1 = new Word(response.data.toString());

//         word1.placeholder();

//         let counter = 0;
//         while (counter < 3) {
//             let guess = await askUserEnterLetter();
//             console.log(guess);
//             word1.guessLetter(guess);
//             counter++;
//         }

//     } catch (error) {
//         console.error(error);
//     }
// }

// getUser();

function init() {
    let counter = 0;
    while (counter < 2) {
        console.log("123");
        getUser();
        counter++;
    }
}

init();