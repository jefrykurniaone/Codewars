//https://www.codewars.com/kata/53af2b8861023f1d88000832/train/typescript

export function areYouPlayingBanjo(name: string): string {
	return name.charAt(0).toLowerCase() === 'r'
		? `${name} plays banjo`
		: `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo('Robert')); // 'Robert plays banjo'
console.log(areYouPlayingBanjo('Alice')); // 'Alice does not play banjo'
