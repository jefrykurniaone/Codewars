//https://www.codewars.com/kata/56606694ec01347ce800001b/train/typescript

export function isTriangle(a: number, b: number, c: number): boolean {
  return a + b > c && a + c > b && b + c > a;
}

console.log(isTriangle(1, 2, 2)); // true
console.log(isTriangle(4, 2, 3)); // true
console.log(isTriangle(2, 2, 2)); // true
console.log(isTriangle(1, 2, 3)); // false
console.log(isTriangle(-5, 1, 3)); // false
console.log(isTriangle(0, 2, 3)); // false
console.log(isTriangle(1, 2, 9)); // false
