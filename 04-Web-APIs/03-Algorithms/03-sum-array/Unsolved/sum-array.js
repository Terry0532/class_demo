// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {
    var total = 0;
    for (i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total;
};