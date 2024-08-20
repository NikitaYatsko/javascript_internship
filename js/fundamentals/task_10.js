export function task10() {
    let userNumber;
    do {
        if (typeof (userNumber) !== 'number'){
            alert("Error you should use only numbers")
        }
        userNumber = parseInt(prompt("What is your number?"));
    } while (userNumber <= 0)
    const dividers = (number) => {
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                console.log(i);
            }
        }
    }

    dividers(userNumber)
}