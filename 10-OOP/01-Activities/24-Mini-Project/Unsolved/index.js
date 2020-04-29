const inquirer = require('inquirer');
const axios = require('axios');
const Word = require('./word');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

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

var request = new XMLHttpRequest();
request.open('GET', "http://random-word-api.herokuapp.com/word?number=1", false);  // `false` makes the request synchronous
request.send(null);

if (request.status === 200) {
    console.log(JSON.parse(request.responseText).toString());
}