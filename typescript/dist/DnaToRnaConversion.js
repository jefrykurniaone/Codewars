"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DNAtoRNA = DNAtoRNA;
function DNAtoRNA(dna) {
    let rna = "";
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'T') {
            rna += 'U';
        }
        else {
            rna += dna[i];
        }
    }
    return rna;
}
console.log(DNAtoRNA("TTTT"));
console.log(DNAtoRNA("GCAT"));
//# sourceMappingURL=DnaToRnaConversion.js.map