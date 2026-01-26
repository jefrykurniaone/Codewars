"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.correct = correct;
function correct(s) {
    const corrections = {
        "5": "S",
        "0": "O",
        "1": "I",
    };
    return s
        .split("")
        .map((char) => corrections[char] || char)
        .join("");
}
console.log(correct("L0ND0N"));
console.log(correct("DUBL1N"));
console.log(correct("51NGAP0RE"));
console.log(correct("BUDAPE5T"));
console.log(correct("PAR15"));
//# sourceMappingURL=CorrectTheMistakesOfTheCharacterRecognitionSoftware.js.map