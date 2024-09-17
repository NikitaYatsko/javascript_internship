export function timeDate5() {
    function timeConvert(minutes) {

        if (minutes < 0) {
            return "Invalid data, minutes cant be < 0"
        }

        let hours = Math.floor(minutes / 60);
        let rest = minutes % 60;
        return `${hours} hours ${rest} minutes`;

    }

    console.log(timeConvert(200));
}