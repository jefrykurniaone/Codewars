"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oddOrEven = oddOrEven;
function oddOrEven(array) {
    if (array.length === 0) {
        return "even";
    }
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    return sum % 2 === 0 ? "even" : "odd";
}
console.log(oddOrEven([0, 1, 5]));
console.log(oddOrEven([0, 1, 4]));
//# sourceMappingURL=OddOrEven.js.map