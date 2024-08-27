export function object9() {
    const weekDays = {
        "Mo": "Понедельник",
        "Tu": "Вторник",
        "We": "Среда",
        "Th": "Четверг",
        "Fr": "Пятница",
        "S": "Суббота",
        "Su": "Воскресенье"
    }

    alert(`Object before:\n${JSON.stringify(weekDays)}\nObject after: ${JSON.stringify(swap(weekDays))}`);

    function swap(objectToSwap) {
        if (Object.keys(objectToSwap).length === 0) {
            alert(`Nothing to swap`);
        }
        const swapped = {}
        Object.entries(objectToSwap).forEach(([key, value]) => {
            swapped[value] = key;
        });
        console.log(swapped);
        return swapped;

    }
}