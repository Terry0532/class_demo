var inquirer = require('inquirer');
var fs = require('fs');

inquirer
    .prompt([{
        type: "input",
        message: "What is your name?",
        name: "username"
    }, {
        type: "input",
        message: "What languages do you know?",
        name: "language"
    }, {
        type: "checkbox",
        message: "What is your preferred method of communication?",
        name: "communication",
        choices: ["verbal", "non-verbal", "written", "listening", "visual"]
    }
    ])
    .then(function (response) {
        fs.writeFile(response.username + ".json", JSON.stringify(response), function (err) {
            if (err) throw err;
            console.log("done");
        })
    })
    .catch(error => {
        if (error.isTtyError) {
            console.log(error);
            // Prompt couldn't be rendered in the current environment
        } else {
            console.log(error);
            // Something else when wrong
        }
    });