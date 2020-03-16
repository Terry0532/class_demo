// Create your HTML Page via DOM Methods here!
var h1 = document.createElement("h1");

h1.textContent = "hi";
document.body.appendChild(h1);

// create a new div element 
var newDiv = document.createElement("div");
// and give it some content 
var newContent = document.createTextNode("Hi there and greetings!");
// add the text node to the newly created div
newDiv.appendChild(newContent);
// add the newly created element and its content into the DOM 
var currentDiv = document.getElementById("div1");
document.body.insertBefore(newDiv, currentDiv); 