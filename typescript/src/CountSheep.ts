//https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/typescript

export function countSheep(num: number): string {
	let result: string = '';
	for (let i = 1; i <= num; i++) {
		result += `${i} sheep...`;
	}
	return result;
}

console.log(countSheep(3)); // '1 sheep...2 sheep...3 sheep...'
