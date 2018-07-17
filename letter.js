//create a constructor Letter
//this constructor will display an underscore as a placeholder
function Letter(character) {
    this.character = character;
    this.guessed = false;
}
Letter.prototype.toString = function () {
    if (this.guessed === false && this.character !== " ") {
        return "_";
    }
    else {
        return this.character;
    }
}

Letter.prototype.checker = function (character) {
    if (character === this.character) {
        this.guessed = true;
        return true;
    }
    else {
        return false;
    }
}

module.exports = Letter; 