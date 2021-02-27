function DNAStrand(dna) {
    let newDna = "";
    for (let i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case "A":
                newDna += "T";
                break;
            case "T":
                newDna += "A";
                break;
            case "C":
                newDna += "G";
                break;
            case "G":
                newDna += "C";
                break;
        }
    }

    return newDna;
}

console.log(DNAStrand("AAAA"), "TTTT", "String AAAA is");
console.log(DNAStrand("ATTGC"), "TAACG", "String ATTGC is");
console.log(DNAStrand("GTAT"), "CATA", "String GTAT is");