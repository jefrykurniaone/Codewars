"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enough = enough;
function enough(cap, on, wait) {
    const total = on + wait;
    return total <= cap ? 0 : total - cap;
}
console.log(enough(10, 5, 5));
console.log(enough(100, 60, 50));
console.log(enough(50, 15, 10));
//# sourceMappingURL=WillThereBeEnoughSpace.js.map