//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/typescript

export const digitize = (n: number): number[] => {
  return n.toString().split("").map(Number).reverse();
};

console.log(digitize(35231)); // [1, 3, 2, 5, 3]
console.log(digitize(0)); // [0]
