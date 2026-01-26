//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/typescript

export function repeatStr(n: number, s: string): string {
  return s.repeat(n);
}

console.log(repeatStr(6, "I")); // "IIIIII"
console.log(repeatStr(5, "Hello")); // "HelloHelloHelloHelloHello"
