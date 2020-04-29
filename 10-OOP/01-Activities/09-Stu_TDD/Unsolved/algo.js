function Algo() { }

Algo.prototype.reverse = function (str) {
    return str.split("").reverse().join("");
};

Algo.prototype.isPalindrome = function (str) {
    const reversed = str.split("").reverse().join("");
    if (str === reversed) {
        return true;
    } else {
        return false;
    }
};

Algo.prototype.capitalize = function (str) {

};

module.exports = Algo;
