"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = solution;
function solution(str, ending) {
    return str.endsWith(ending);
}
console.log(solution("abcde", "cde"));
console.log(solution("abcde", "abc"));
//# sourceMappingURL=StringEndsWith.js.map