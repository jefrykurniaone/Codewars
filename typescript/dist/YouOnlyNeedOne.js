"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = void 0;
const check = (a, x) => {
    return a.includes(x);
};
exports.check = check;
console.log((0, exports.check)([66, 101], 66));
console.log((0, exports.check)([80, 117, 115, 104, 45, 85, 112, 115], 45));
console.log((0, exports.check)(['t', 'e', 's', 't'], 'e'));
console.log((0, exports.check)(['what', 'a', 'great', 'kata'], 'kat'));
//# sourceMappingURL=YouOnlyNeedOne.js.map