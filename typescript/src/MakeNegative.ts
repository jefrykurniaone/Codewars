//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/typescript

export const makeNegative = (num: number): number => {
	return num > 0 ? -num : num;
};

console.log(makeNegative(5)); // -5
console.log(makeNegative(-3)); // -3
console.log(makeNegative(0)); // 0
