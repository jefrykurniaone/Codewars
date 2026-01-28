"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countSheep = countSheep;
function countSheep(num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result += `${i} sheep...`;
    }
    return result;
}
console.log(countSheep(3));
//# sourceMappingURL=CountSheep.js.map