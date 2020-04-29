const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
let repoArr = [];

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function ({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    console.log(queryUrl)
    axios.get(queryUrl)
      .then(function (response) {
        // handle success
        // console.log(response.data);
        // for (let repoName of response.data) {
        //   repoArr.push(repoName.name);
        // }
        repoArr = response.data.map(repo => repo.name);
        console.log(repoArr);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  });