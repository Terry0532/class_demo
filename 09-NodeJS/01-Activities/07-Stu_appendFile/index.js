var fs = require("fs");
fs.appendFile("test.txt", "test\n", file);
function file(error) {
    if (error) throw error;
    console.log("test");
}