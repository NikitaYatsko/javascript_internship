export function object8() {
    const weekDays = {
        "Mo": "Понедельник",
        "Tu": "Вторник",
        "We": "Среда",
        "Th": "Четверг",
        "Fr": "Пятница",
        "S": "Суббота",
        "Su": "Воскресенье"
    }
    const translatedWeekDays = {
        "Mo": "Luni",
        "Tu": "Marti",
        "We": "Miercuri",
        "Th": "Joi",
        "Fr": "Vineri",
        "S": "Sambata",
        "Su": "Duminica"
    }

    console.log(translateToRo(weekDays, translatedWeekDays))

    function translateToRo(objectToTranslate, translationObject) {
        if (Object.keys(objectToTranslate.length === 0)){
            console.log(`Object is empty`)
        }
        const newObject = {}
        Object.keys(objectToTranslate).forEach(day => {
            newObject[day] = translationObject[day];
        });

        return newObject;
    }
}
