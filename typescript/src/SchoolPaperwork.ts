//https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/typescript

export function paperwork(n: number, m: number): number {
	if (n < 0 || m < 0) {
		return 0;
	}
	return n * m;
}

console.log(paperwork(5, 5)); // 25
console.log(paperwork(-5, 5)); // 0
console.log(paperwork(5, -5)); // 0
