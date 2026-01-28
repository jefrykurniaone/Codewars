//https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/typescript

export function basicOp(
	operation: string,
	value1: number,
	value2: number,
): number {
	switch (operation) {
		case '+':
			return value1 + value2;
		case '-':
			return value1 - value2;
		case '*':
			return value1 * value2;
		case '/':
			return value1 / value2;
		default:
			throw new Error('Invalid operation');
	}
}

console.log(basicOp('+', 4, 7)); // 11
console.log(basicOp('-', 15, 18)); // -3
console.log(basicOp('*', 5, 5)); // 25
console.log(basicOp('/', 49, 7)); // 7
