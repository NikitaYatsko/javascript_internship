export function timeDate6() {
    let birthday = prompt("Write your birthday in YYYY-MM-DD");

    function calculateAge(date) {
        let now = new Date();
        let birthDay = new Date(date);

        let years = now.getFullYear() - birthDay.getFullYear();
        let months = now.getMonth() - birthDay.getMonth();
        let days = now.getDate() - birthDay.getDate();

        if (days < 0) {
            months--;
            days += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); // get last day of the previous month
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        let totalMonths = years * 12 + months;
        let totalDays = Math.floor((now - birthDay) / (1000 * 60 * 60 * 24));

        console.log(`Age: ${years} years, ${months} months, ${days} days`);
        console.log(`Total months: ${totalMonths}`);
        console.log(`Total days: ${totalDays}`);
    }

    calculateAge(birthday);
}
