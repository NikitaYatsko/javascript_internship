export function array4() {
    let n = parseInt(prompt("How many numbers do you want in array?"))
    if (isNaN(n) || n <= 0){
        alert(`Error`);
        return;
    }
    const array = [];
    for (let i = 0; i < n; i++) {
        let number = parseInt(prompt("Write numbers of array"))
        if (isNaN(number) || typeof (number) !== "number") {
            //действия все равно с числами ,поэтому провеерка на пустую строку не нужна вовсе
            alert("Not a number")
            alert(`Your current array is [${array}]`);
            alert(`Sum of current numbers is: ${sumOfNumbers(array)}`);
            return;
        } else {
            array.push(number);
        }
    }
    alert(`Your current array is [${array}]`);
    alert(`Sum of numbers is: ${sumOfNumbers(array)}`);

    function sumOfNumbers(arrayToSumNumbers) {
        return arrayToSumNumbers.reduce((sum, currentValue) => sum + currentValue, 0);
    }
}