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

        alert(`Average grade for each student: \n${JSON.stringify(arrayOfAverageGrade)}`)
    }

    function lessThanFiveAverage(array) {
        const arrayLessThanFive = array.map(obj => ({
            name: obj.name,
            average: obj.marks.reduce((sum, mark) => sum + mark, 0) / obj.marks.length
        }))
            .filter(student => student.average < 5)

        alert(`Lowest average grade: \n${JSON.stringify(arrayLessThanFive)}`);
    }

    function minMaxAverage(array) {

        const arrayOfAverages = array.map(obj => ({
            name: obj.name,
            average: obj.marks.reduce((sum, mark) => sum + mark, 0) / obj.marks.length
        }));
        //
        const maxAverageStudent = arrayOfAverages.reduce((max, student) => student.average > max.average ? student : max, arrayOfAverages[0]);
        const minAverageStudent = arrayOfAverages.reduce((min, student) => student.average < min.average ? student : min, arrayOfAverages[0]);
        //здесь решил воспользоваться ИИ тк застопорился и долго не понимал как сообразить решение(

        alert(`Average grades for each student:, ${JSON.stringify(arrayOfAverages)}\n
        Student with max average:, ${JSON.stringify(maxAverageStudent.name)}, with average:, ${JSON.stringify(maxAverageStudent.average)}\n
        Student with min average:, ${JSON.stringify(minAverageStudent.name)}, with average:, ${JSON.stringify(minAverageStudent.average)}`);


    }


}
