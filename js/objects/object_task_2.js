export function object2() {
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }


    function calcSalary(obj) {
        if (Object.keys(obj).length === 0) {
            return 0;
        }
        let salarySum = 0;
        for (const objKey of Object.values(obj)) {
            salarySum += objKey;
        }
        return salarySum;
    }

    console.log(calcSalary(salaries));
}