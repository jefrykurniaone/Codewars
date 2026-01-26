"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalCarCost = rentalCarCost;
function rentalCarCost(d) {
    let cost = d * 40;
    if (d >= 7) {
        cost -= 50;
    }
    else if (d >= 3) {
        cost -= 20;
    }
    return cost;
}
console.log(rentalCarCost(1));
console.log(rentalCarCost(3));
console.log(rentalCarCost(7));
//# sourceMappingURL=TransportationOnVacation.js.map