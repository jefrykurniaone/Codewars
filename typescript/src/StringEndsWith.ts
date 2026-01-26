//link https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

export function solution(str: string, ending: string): boolean {
  return str.endsWith(ending);
}

console.log(solution("abcde", "cde")); // true
console.log(solution("abcde", "abc")); // false
