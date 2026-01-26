"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countBy = countBy;
function countBy(x, n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        result.push(x * i);
    }
    return result;
}
console.log(countBy(1, 10));
console.log(countBy(2, 5));
//# sourceMappingURL=CountByX.js.map