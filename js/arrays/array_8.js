export function array8() {
    const colors = ["red", "green", "blue"];

    function checkColor(color, arrayToCheck) {
        if (arrayToCheck.includes(color)) {
            alert(`Index of ${color}, is ${arrayToCheck.indexOf(color)}`);
        } else {
            alert(`${color} not found, ${arrayToCheck.indexOf(color)}`);
        }
    }

    checkColor("red1", colors);
}