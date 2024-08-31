export function object11() {
    let option = parseInt(prompt("What option you choose?:\n" +
        "1.Show average grade for each student\n" +
        "2.Show students with average note < 5\n"));
    const arrayOfStudents = [
        {name: "Andrew", marks: [8, 10, 7, 5, 4]},
        {name: "John", marks: [4, 9, 7, 5, 9]},
        {name: "Nick", marks: [2, 4, 2, 5, 4]},
        {name: "Ivan", marks: [6, 10, 7, 5, 6]},
        {name: "Saniok", marks: [8, 10, 9, 5, 8]}
    ];

    /*switch (option) {
        case 1:
            averageGrade(arrayOfStudents);
            break;
        case 2:
            lessThanFiveAverage(arrayOfStudents)
            break;
        case 3:
            minMaxAverage(arrayOfStudents);

    }*/
    averageGrade(arrayOfStudents);
    lessThanFiveAverage(arrayOfStudents);
    minMaxAverage(arrayOfStudents);

    function averageGrade(array) {
        const arrayOfAverageGrade = array.map(obj => ({
            name: obj.name,
            average: obj.marks.reduce((sum, mark) => sum + mark, 0) / obj.marks.length
        }))

        console.log(JSON.stringify(arrayOfAverageGrade, null, 2));
    }

    function lessThanFiveAverage(array) {
        const arrayLessThanFive = array.map(obj => ({
            name: obj.name,
            average: obj.marks.reduce((sum, mark) => sum + mark, 0) / obj.marks.length
        }))
            .filter(student => student.average < 5)

        console.log(JSON.stringify(arrayLessThanFive, null, 2));
    }

    function minMaxAverage(array) {


    }

}
