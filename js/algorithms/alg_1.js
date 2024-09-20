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



