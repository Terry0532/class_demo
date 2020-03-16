var buttonD = document.getElementById("decrement");
var buttonI = document.getElementById("increment");
var count = document.getElementById("count");
var num = 0;

buttonD.addEventListener("click", decrement);
buttonI.addEventListener("click", increment);

function decrement() {
    num--;
    count.innerHTML = num;
}

function increment() {
    num++;
    count.innerHTML = num;
}