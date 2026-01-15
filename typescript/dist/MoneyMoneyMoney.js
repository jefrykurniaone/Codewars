"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateYears = calculateYears;
function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    while (principal < desired) {
        let earnedInterest = principal * interest;
        earnedInterest -= earnedInterest * tax;
        principal += earnedInterest;
        years++;
    }
    return years;
}
console.log(calculateYears(1000, 0.05, 0.18, 1100));
console.log(calculateYears(1000, 0.01625, 0.18, 1200));
//# sourceMappingURL=MoneyMoneyMoney.js.map