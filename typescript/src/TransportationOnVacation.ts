//https://www.codewars.com/kata/568d0dd208ee69389d000016/train/typescript

export function rentalCarCost(d: number): number {
  let cost = d * 40;
  if (d >= 7) {
    cost -= 50;
  } else if (d >= 3) {
    cost -= 20;
  }
  return cost;
}

console.log(rentalCarCost(1)); // 40
console.log(rentalCarCost(3)); // 100
console.log(rentalCarCost(7)); // 230
