//https://www.codewars.com/kata/5513795bd3fafb56c200049e/typescript

export function countBy(x: number, n: number): number[] {
  const result: number[] = [];
  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }
  return result;
}

console.log(countBy(1, 10)); // [1,2,3,4,5,6,7,8,9,10]
console.log(countBy(2, 5)); // [2,4,6,8,10]
