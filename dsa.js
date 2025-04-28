/////////////////////   FIBONACCI SEQUENCE  ////////////////

function fibonacci(n) {
    let fib = [0, 1]
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib.join(" ")
}

console.log(fibonacci(7))


//////////             FACTORIAL        ///////////////////


function factorial(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i
    }
    return fact
}

console.log(factorial(5))


/////////////////     PRIME NUMBERS       ////////////


function isPrime(n) {

    if (n < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

// console.log(isPrime(6))

function prime(numbers) {
    let array = [];
    for (let i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            array.push(numbers[i])
        }
    }
    return array.join(" ")
}

console.log(prime([1, 2, 3, 4, 5, 6, 7, , 8, 9, 10]))

function prime1(numbers) {
    let array = [];
    let array1 = []
    for (let i = 0; i < numbers; i++) {
        if (isPrime(i)) {
            array.push(i)
        } else {
            array1.push(i)
        }
    }
    return `primeNumber: ${array.join(" ")} \n NotPrime: ${array1.join(" ")}`
}

console.log(prime1(50))



/////////////////////////            POWER OF TWO       /////////////////

function PowerOfTwo(n) {
    if (n < 1) {
        return false;
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2
    }
    return true
}

console.log(PowerOfTwo(10))



function bitwise(n) {


    return n > 0 && (n & (n - 1)) === 0
}

console.log(bitwise(1))
console.log(bitwise(2))
console.log(bitwise(3))
console.log(bitwise(4))
console.log(bitwise(5))


/////////////////////    RECURSIVE FIBONACCI SEQUENCE   /////////////////////

function recursion(n) {
    if (n < 2) {
        return n
    }
    return recursion(n - 1) + recursion(n - 2)
}

console.log(recursion(0))


/////////////////////////    RECURSIVE FACTORIAL SERIES  //////////////////////


function recFac(n) {
    if (n === 0) {
        return 1
    }
    return n * recFac(n - 1)
}

console.log(recFac(5))


/////////////////////////  SUM OF RECUSRSION          ///////////////////////


function recSum(n) {
    if (n === 0) {
        return 0;
    }

    return n + (recSum(n - 1))


}
console.log(recSum(5))

///////////////////////🌟 Task: Sum of Digits (Recursion)/////////////


function sumDigits(n) {
    if (n === 0) {
        return 0;
    }
    return (n % 10) + sumDigits(Math.floor(n / 10));
}

console.log(sumDigits(123)); // Output: 6