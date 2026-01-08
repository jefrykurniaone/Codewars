"use strict";
//link https://www.codewars.com/kata/5174a4c0f2769dd8b1000003
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = solution;
function solution(nums) {
    return nums.sort((a, b) => a - b);
}
console.log(solution([3, 2, 1])); // [1, 2, 3]
console.log(solution([5, 10, 1, 3])); // [1, 3, 5, 10]
//# sourceMappingURL=SortNumbers.js.map