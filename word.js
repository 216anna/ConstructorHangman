//@ts-check
var Letter = require('./letter.js');

function Word(word) {
    this.letters = [];
    this.guesses = 0;
    for (var c of Array.from(word)) {
        this.letters.push(new Letter(c));
    }
}
Word.prototype.toString = function () {
    return this.letters.join(" ");
}
Word.prototype.guess = function (character) {
    for (var l of this.letters) {
        l.checker(character);
    }
    this.guesses++;
}
Word.prototype.moreGuesses = function () {
    if (this.isCorrect() || this.guesses >= this.letters.length) {
        return false; 
    } 
    return true;
}
Word.prototype.isCorrect = function () {
    return !this.letters.toString().includes("_");
}

module.exports = Word;