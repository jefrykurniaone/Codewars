//https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/typescript

export function findNeedle(haystack: any[]): string {
  const index = haystack.indexOf("needle");
  return `found the needle at position ${index}`;
}

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]),
); // "found the needle at position 5"
console.log(findNeedle([0, 1, 2, 3, 4, "needle", 6, 7, 8])); // "found the needle at position 5"
