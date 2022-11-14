// Problem 2.1: print n! (factorial of n), n is a positive integer

function factorial(num){
    
    let factorial = 1;

    for(let count = 2; count <= num; count++){
        factorial *= count; 
    }
    return factorial;
}

module.exports = {
    factorial: factorial
}
