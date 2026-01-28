//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/typescript

export function number(array: string[]): string[] {
	// for (let i = 0; i < array.length; i++) {
	// 	array[i] = `${i + 1}: ${array[i]}`;
	// }
	//  return array;
	return array.map((item, i) => `${i + 1}: ${item}`);
}

console.log(number([])); // []
console.log(number(['a', 'b', 'c'])); // ['1: a', '2: b', '3: c']
