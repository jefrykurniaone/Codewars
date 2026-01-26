"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNeedle = findNeedle;
function findNeedle(haystack) {
    const index = haystack.indexOf("needle");
    return `found the needle at position ${index}`;
}
console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
console.log(findNeedle([0, 1, 2, 3, 4, "needle", 6, 7, 8]));
//# sourceMappingURL=ANeedleInTheHaystack.js.map