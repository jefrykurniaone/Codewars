//link https://www.codewars.com/kata/5174a4c0f2769dd8b1000003

export function solution(nums: number[]): number[] {
  return nums.sort((a, b) => a - b);
}

console.log(solution([3, 2, 1])); // [1, 2, 3]
console.log(solution([5, 10, 1, 3])); // [1, 3, 5, 10]
