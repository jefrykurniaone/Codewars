//https://www.codewars.com/kata/53dc23c68a0c93699800041d/typescript

export function smash(words: string[]): string {
	return words.join(' ');
}

console.log(smash(['hello', 'world', 'this', 'is', 'great'])); // 'hello world this is great'
