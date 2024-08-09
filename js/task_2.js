export function task2() {
    let start = prompt('write start of the interval')
    let end = prompt('write end of the interval')
    let sumPositive = 0;
    for (let i = start; i <= end; i++) {
        if (i%2 === 0){
            sumPositive += i;

        }
    }
    alert(sumPositive);
}