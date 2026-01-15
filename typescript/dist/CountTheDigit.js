"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = void 0;
class G964 {
    static nbDig(n, d) {
        let count = 0;
        for (let i = 0; i <= n; i++) {
            const square = (i * i).toString();
            count += square.split(d.toString()).length - 1;
        }
        return count;
    }
}
exports.G964 = G964;
console.log(G964.nbDig(10, 1));
console.log(G964.nbDig(25, 1));
//# sourceMappingURL=CountTheDigit.js.map