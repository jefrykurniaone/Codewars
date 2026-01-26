"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanYearsCatYearsDogYears = humanYearsCatYearsDogYears;
function humanYearsCatYearsDogYears(humanYears) {
    let catYears;
    let dogYears;
    if (humanYears === 1) {
        catYears = 15;
        dogYears = 15;
    }
    else if (humanYears === 2) {
        catYears = 24;
        dogYears = 24;
    }
    else {
        catYears = 24 + (humanYears - 2) * 4;
        dogYears = 24 + (humanYears - 2) * 5;
    }
    return [humanYears, catYears, dogYears];
}
console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(10));
//# sourceMappingURL=CatYearsDogYears.js.map