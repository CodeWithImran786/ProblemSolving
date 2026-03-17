const arr = [1, 2, 4, 5]; // missing 3
const n = 5;
const missing = (n * (n + 1)) / 2 - arr.reduce((a, b) => a + b, 0);

console.log(missing); // 3



//we use a mathematical shortcut formula.
//Sum of numbers 1 → n is always {1 2 3 4 5}: (n * (n + 1)) / 2 = 30/2=15


//Calculate Actual Array Sum using reduce()
//[1,2,4,5]
//0 + 1 = 1
// 1 + 2 = 3
// 3 + 4 = 7
// 7 + 5 = 12
//Array sum = 12 

// Find Missing Number   //Expected sum - Actual sum 
//15 - 12 = 3   //So the missing number is 3.

//