//https://www.codewars.com/kata/55b42574ff091733d900002f/train/typescript

export function friendOrFoe(friends: string[]): string[] {
  return friends.filter((name) => name.length === 4);
}

console.log(friendOrFoe(["Ryan", "Kieran", "Mark"])); // ["Ryan", "Mark"]
console.log(friendOrFoe(["Ryan", "Jimmy", "1234", "4", "Cool Man"])); // ["Ryan", "1234"]
