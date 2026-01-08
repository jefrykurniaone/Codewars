"use strict";
//link https://www.codewars.com/kata/539ee3b6757843632d00026b
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitals = capitals;
function capitals(word) {
    let result = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            result.push(i);
        }
    }
    return result;
}
console.log(capitals("CodEWaRs")); // [0, 3, 4, 6]
console.log(capitals("aBCdEfG")); // [1, 2, 4, 6]
//# sourceMappingURL=FindTheCapitals.js.map