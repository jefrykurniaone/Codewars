//link https://www.codewars.com/kata/563f037412e5ada593000114

export function calculateYears(principal: number, interest: number, tax: number, desired: number): number {
     let years = 0;
    
    while (principal < desired) {
        let earnedInterest = principal * interest;
        earnedInterest -= earnedInterest * tax;
        principal += earnedInterest;
        
        years++;
    }
    
    return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100)); // 3
console.log(calculateYears(1000,0.01625,0.18,1200)); // 14