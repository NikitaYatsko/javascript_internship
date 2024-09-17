export function timeDate1() {
    function getCurrentDate(separator = "/") {
        /*const currentDate = new Date();
        const currentDay = currentDate.getDate();
        const currentMonth = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        console.log(`Current date is ${currentDay}${separator}${currentMonth}${separator}${year}`);*/

        return `${new Date().getDate()}${separator}${new Date().getMonth() + 1}${separator}${new Date().getFullYear()}`;

    }

    alert(getCurrentDate('----'));
    alert(getCurrentDate(':'));
}
