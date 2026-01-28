"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paperwork = paperwork;
function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0;
    }
    return n * m;
}
console.log(paperwork(5, 5));
console.log(paperwork(-5, 5));
console.log(paperwork(5, -5));
//# sourceMappingURL=SchoolPaperwork.js.map