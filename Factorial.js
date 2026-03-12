function factorial(n){
    if(n < 0) return "Factorial not defined for -ve numbers"

    let result = 1;

    for(let i = 1; i<= n; i++){
        result *= i;

    }
    return result;
}
console.log(factorial(5));









// 0! = 1
// Negative number → not defined
// Large number → stack overflow (recursion )

