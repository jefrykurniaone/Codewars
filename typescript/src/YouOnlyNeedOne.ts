//https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/typescript

export const check = (a: (number | string)[], x: number | string): boolean => {
	return a.includes(x);
};

console.log(check([66, 101], 66)); // true
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45)); // true
console.log(check(['t', 'e', 's', 't'], 'e')); // true
console.log(check(['what', 'a', 'great', 'kata'], 'kat')); // false
