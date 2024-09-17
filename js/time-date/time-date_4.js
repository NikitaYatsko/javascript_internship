export function timeDate4() {
    function compareDates(date1, date2) {
        if (date1.getTime() > date2.getTime()) {
            console.log("Date 1 > Date 2");
        } else if (date1.getTime() === date2.getTime()) {
            console.log('Date 1 = Date 2')
        } else {
            console.log("Date 2 > Date 1")
        }
        console.log(date1)

    }


    compareDates(new Date('11/14/2013 00:06'), new Date('11/14/2013 00:05'))

}