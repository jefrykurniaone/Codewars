//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/typescript

export function reverseWords(str: string): string {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("This is an example!")); // "sihT si na !elpmaxe"
console.log(reverseWords("double  spaces")); // "elbuod  secaps"
