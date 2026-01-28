"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countPositivesSumNegatives = countPositivesSumNegatives;
function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return [];
    }
    let countPositives = 0;
    let sumNegatives = 0;
    for (const num of input) {
        if (num > 0) {
            countPositives++;
        }
        else if (num < 0) {
            sumNegatives += num;
        }
    }
    return [countPositives, sumNegatives];
}
console.log(countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]));
//# sourceMappingURL=CountPositivesSumNegatives.js.map