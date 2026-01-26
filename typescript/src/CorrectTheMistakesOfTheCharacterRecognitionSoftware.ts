//https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/typescript

export function correct(s: string): string {
  const corrections: { [key: string]: string } = {
    "5": "S",
    "0": "O",
    "1": "I",
  };
  return s
    .split("")
    .map((char) => corrections[char] || char)
    .join("");
}

console.log(correct("L0ND0N")); // "LONDON"
console.log(correct("DUBL1N")); // "DUBLIN"
console.log(correct("51NGAP0RE")); // "SINGAPORE"
console.log(correct("BUDAPE5T")); // "BUDAPEST"
console.log(correct("PAR15")); // "PARIS"
