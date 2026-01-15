//link https://www.codewars.com/kata/5556282156230d0e5e000089

export function DNAtoRNA(dna: string): string {
  let rna = "";
    
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'T') {
            rna += 'U';
        } else {
            rna += dna[i];
        }
    }
    
    return rna;
}

console.log(DNAtoRNA("TTTT")); // "UUUU"
console.log(DNAtoRNA("GCAT")); // "GCAU"