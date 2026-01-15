"use strict";
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
console.log(capitals("CodEWaRs"));
console.log(capitals("aBCdEfG"));
//# sourceMappingURL=FindTheCapitals.js.map