function stray(numbers) {
    const sorted = numbers.sort((a, b) => a - b);

    return sorted[0] == sorted[1] ? sorted.pop() : sorted.shift();
}

console.log(stray([1, 1, 2]), 2);