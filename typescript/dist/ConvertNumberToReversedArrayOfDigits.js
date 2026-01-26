"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitize = void 0;
const digitize = (n) => {
    return n.toString().split("").map(Number).reverse();
};
exports.digitize = digitize;
console.log((0, exports.digitize)(35231));
console.log((0, exports.digitize)(0));
//# sourceMappingURL=ConvertNumberToReversedArrayOfDigits.js.map