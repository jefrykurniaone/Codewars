//link https://www.codewars.com/kata/566fc12495810954b1000030

export class G964 {
    public static nbDig(n: number, d: number): number {
        let count = 0;

        for (let i = 0; i <= n; i++) {
            const square = (i * i).toString();

            count += square.split(d.toString()).length - 1;
        }

        return count;
        }
}

console.log(G964.nbDig(10, 1)); // total count of digit 1 in squares from 0 to 10 is 4 (1, 16, 81, 100)
console.log(G964.nbDig(25, 1)); // total count of digit 1 in squares from 0 to 25 is 11 (1, 16, 81, 100, 121, 144, 169, 196, 361, 441)