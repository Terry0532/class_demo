var mealPrice = document.getElementById("price");
var tipPercentage = document.getElementById("percentage");
var submitButton = document.getElementById("submit");
var total = document.getElementById("new-total");

function calculateTotalCost(event) {
    event.preventDefault();
    total.innerText = Number(mealPrice.value) * Number(tipPercentage.value) * .01 + Number(mealPrice.value);
}

submitButton.addEventListener("click", calculateTotalCost);