//https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/typescript

export function humanYearsCatYearsDogYears(
  humanYears: number,
): [number, number, number] {
  let catYears: number;
  let dogYears: number;
  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (humanYears === 2) {
    catYears = 24;
    dogYears = 24;
  } else {
    catYears = 24 + (humanYears - 2) * 4;
    dogYears = 24 + (humanYears - 2) * 5;
  }
  return [humanYears, catYears, dogYears];
}

console.log(humanYearsCatYearsDogYears(1)); // [1, 15, 15]
console.log(humanYearsCatYearsDogYears(2)); // [2, 24, 24]
console.log(humanYearsCatYearsDogYears(10)); // [10, 56, 64]
