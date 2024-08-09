export function task6() {
    let number = prompt('Type a number');
    if (number > 0) {
        alert(1);
    } else if (number < 0) {
        alert(-1)
    } else if (number == 0) {
        alert(0)
    } else if (typeof (number) !== 'number') {
        alert("Error")
    }
}