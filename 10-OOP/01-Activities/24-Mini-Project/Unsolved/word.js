class Word {
    constructor(word) {
        this.word = word;
        let toGuess = word.split("");
        this.displayGuessed = ["_".repeat(toGuess.length)];
    }
    placeholder() {
        console.log(this.displayGuessed.join(""));
    }
    guessLetter(letter) {
        this.displayGuessed.push(letter);
        console.log(this.displayGuessed.join(""));
    }
}

module.exports = Word;