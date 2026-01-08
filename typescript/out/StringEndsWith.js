"use strict";
//link https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = solution;
function solution(str, ending) {
    return str.endsWith(ending);
}
console.log(solution("abcde", "cde")); // true
console.log(solution("abcde", "abc")); // false
//# sourceMappingURL=StringEndsWith.js.map