//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/typescript

export function cockroachSpeed(s: number): number {
  return Math.floor(s * 27.7778);
}

console.log(cockroachSpeed(1.08)); // 30
console.log(cockroachSpeed(1.09)); // 30
console.log(cockroachSpeed(0)); // 0
