export function timeDate3() {
    function month_name(date) {
        return date.toLocaleString(undefined, {month: 'long'});
       // return date.toLocaleString(undefined, {month: 'short'});

    }

    console.log(month_name(new Date("12/11/2024")))


}