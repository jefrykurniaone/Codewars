//https://www.codewars.com/kata/5a023c426975981341000014/train/typescript

export function otherAngle(a: number, b: number): number {
	return 180 - (a + b);
}

console.log(otherAngle(30, 60)); // 90
console.log(otherAngle(60, 60)); // 60
console.log(otherAngle(43, 78)); // 59
console.log(otherAngle(10, 20)); // 150
