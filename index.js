var Word = require('./word.js');
var inquirer = require("inquirer");
var list = ["apple", "banana", "orange"];
// var w = new Word("apple");
// console.log(w.toString());
// w.guess("p");
// console.log(w.toString());
// w.guess("l");
// console.log(w.toString());
//var guess = function () {

var w = new Word(s);
var guessWord = function () {
    inquirer.prompt([
        {
            name: "letter",
            message: "guess a letter"

        }
    ]).then(function (answers) {
        w.guess(answers["letter"]);
        console.log(w.toString());
        if (w.moreGuesses()) {
            guessWord();
        }
        else {
            if (w.isCorrect()) {
                console.log('You Win');
            }
            else {
                console.log('You lose.');
                //if there are more words then get the next word
                //get it in w 
                //guessWord();
            }
        }
    });
}
guessWord();
