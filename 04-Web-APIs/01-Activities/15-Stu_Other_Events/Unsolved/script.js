var eventType = document.querySelector("#event-type");
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

var keyStatus = document.getElementById("status");

function toggleDisplay(event) {
  var value = event.target.value;
  if (value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}

function listenKeyStatus(event) {
  console.log(event);
  document.getElementById("key").innerText = event.key;
  document.getElementById("code").innerText = event.code;
  document.getElementById("status").innerText = event.type;
}

function keyUp(event) {
  document.getElementById("status").innerText = event.type;
}

function clickEvent(event) {
  console.log(event);
  document.getElementById("x").innerText = event.screenX;
  document.getElementById("y").innerText = event.screenY;
  document.getElementById("target").innerText = event.target.innerText;
}

eventType.addEventListener("change", toggleDisplay);
document.addEventListener("keydown", listenKeyStatus);
document.addEventListener("keyup", keyUp);
document.addEventListener("click", clickEvent);