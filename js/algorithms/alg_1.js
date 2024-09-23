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

console.log(factorial(1));
