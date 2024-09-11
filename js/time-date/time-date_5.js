export function timeDate5() {
    function timeConvert(minutes) {


        let hours = Math.floor(minutes / 60);
        let rest = minutes % 60;
        return `${hours} hours ${rest} minutes`;

    }

    console.log(timeConvert(200));
}