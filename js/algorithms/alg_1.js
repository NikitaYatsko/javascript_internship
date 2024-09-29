// task1
let i = 0;
let down = 99;
let up = 0;
let result = [];

while (i < 50) {
    result.push(up);
    result.push(down);
    down -= 2;
    up += 2;
    i++;
}

console.log(result);

//task2

function fibonachi(n) {
    let array = []
    let a = 0;
    let b = 1;
    array.splice(0, 0, a, b);
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
        array.push(b);
    }
    return array;

}

console.log(fibonachi(10));

//task 3

function factorial(n) {


    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);

}

console.log(factorial(5));

//task 4
function chotoTam(n) {
    let array = [];

    for (let i = 0; i <= n; i++) {
        array.push(i * i);
    }
    return array;

}

console.log(chotoTam(100));

//task 5
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function printPrimes(limit) {
    let primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}


console.log(printPrimes(100)); // Выводим простые числа до 100


