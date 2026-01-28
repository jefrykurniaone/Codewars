"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.number = number;
function number(array) {
    return array.map((item, i) => `${i + 1}: ${item}`);
}
console.log(number([]));
console.log(number(['a', 'b', 'c']));
//# sourceMappingURL=Number.js.map