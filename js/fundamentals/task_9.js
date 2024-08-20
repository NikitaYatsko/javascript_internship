export function task9() {
    let name = prompt("Как вас зовут?");
    if (name === null || name.trim() === '') {
        alert("Операция отменена")
        return
    }
    alert(`Здравствуйте${name}`);
    let choice = prompt("Знаком ли вам язык JavaScript");
    if (choice === null || name.trim() === "") {
        alert("Операция отменена")
    }
    if (choice.toLowerCase() === "да") {
        alert("Отлично")
    } else {
        alert("Вы можете начать его изучать прямо сейчас!")
    }


}