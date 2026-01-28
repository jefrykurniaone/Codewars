"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeNegative = void 0;
const makeNegative = (num) => {
    return num > 0 ? -num : num;
};
exports.makeNegative = makeNegative;
console.log((0, exports.makeNegative)(5));
console.log((0, exports.makeNegative)(-3));
console.log((0, exports.makeNegative)(0));
//# sourceMappingURL=MakeNegative.js.map