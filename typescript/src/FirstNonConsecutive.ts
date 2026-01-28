//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/typescript

export function firstNonConsecutive(arr: number[]): null | number {
	//if (arr.length === 0 || arr.length === 1) return null;

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] !== arr[i - 1] + 1) {
			return arr[i];
		}
	}
	return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // 6
console.log(firstNonConsecutive([])); // null
console.log(firstNonConsecutive([1])); // null
