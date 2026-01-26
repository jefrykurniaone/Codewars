//https://www.codewars.com/kata/5875b200d520904a04000003/typescript

export function enough(cap: number, on: number, wait: number): number {
  const total = on + wait;
  return total <= cap ? 0 : total - cap;
}

console.log(enough(10, 5, 5)); // 0
console.log(enough(100, 60, 50)); // 10
console.log(enough(50, 15, 10)); // 0
