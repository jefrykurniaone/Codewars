//link https://www.codewars.com/kata/5949481f86420f59480000e7

export function oddOrEven(array: number[]) {
    if (array.length === 0) {
        return "even";
    }
    
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    
    return sum % 2 === 0 ? "even" : "odd";
}

console.log(oddOrEven([0, 1, 5])); // Output: "even"
console.log(oddOrEven([0, 1, 4])); // Output: "odd"