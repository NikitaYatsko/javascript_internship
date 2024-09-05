export function object11() {
    let option = parseInt(prompt("What option you choose?:\n" +
        "1.Show average grade for each student\n" +
        "2.Show students with average note < 5\n" +
        "3.Show min and max average note\n" +
        "4.Show sorted by average students\n" +
        "5.Show average higher than entire class"));
    const arrayOfStudents = [
        {name: "Andrew", marks: [8, 10, 7, 5, 4]},
        {name: "John", marks: [4, 9, 7, 5, 9]},
        {name: "Nick", marks: [2, 4, 2, 5, 4]},
        {name: "Ivan", marks: [6, 10, 8, 5, 6]},
        {name: "Saniok", marks: [10, 10, 9, 5, 8, 7, 10, 7, 10, 7]}
    ];

    switch (option) {
        case 1:
            averageGrade(arrayOfStudents);
            break;
        case 2:
            lessThanFiveAverage(arrayOfStudents)
            break;
        case 3:
            minMaxAverage(arrayOfStudents);
            break;
        case 4:
            sortByAverage(arrayOfStudents);
            break;
        case 5:
            higherThanEntireClass(arrayOfStudents);
            break;
        default:
            alert("Invalid option");
    }
}


function getAverage(array) {
    if (array.length === 0) {
        alert(`Error: Array is empty`)
        return [];
    }
    return array.map(obj => ({
        name: obj.name,
        average: obj.marks.reduce((sum, mark) => sum + mark) / obj.marks.length
    }));
}

function averageGrade(array) {
    const arrayOfAverageGrade = getAverage(array);

    alert(`Average grade for each student: \n${JSON.stringify(arrayOfAverageGrade)}`)
}

function lessThanFiveAverage(array) {
    const arrayLessThanFive = getAverage(array)
        .filter(student => student.average < 5)

    alert(`Lowest average grade: \n${JSON.stringify(arrayLessThanFive)}`);
}

function minMaxAverage(array) {

    const arrayOfAverages = getAverage(array)
    //
    const maxAverageStudent = arrayOfAverages.reduce((max, student) => student.average > max.average ? student : max, arrayOfAverages[0]);
    const minAverageStudent = arrayOfAverages.reduce((min, student) => student.average < min.average ? student : min, arrayOfAverages[0]);
    //здесь решил воспользоваться ИИ тк застопорился и долго не понимал как сообразить решение(

    alert(`Average grades for each student:, ${JSON.stringify(arrayOfAverages)}\n
    Student with max average:, ${maxAverageStudent.name}, with average:, ${maxAverageStudent.average}\n
    Student with min average:, ${minAverageStudent.name}, with average:, ${minAverageStudent.average}`);


}

function sortByAverage(arrayToSort) {
    const arrayForNextSort = getAverage(arrayToSort)
        .sort((a, b) => b.average - a.average);
    alert(`Sorted data: \n${JSON.stringify(arrayForNextSort)}`);
}

function higherThanEntireClass(array) {

    const totalAverage = array.map(obj => obj.marks.reduce((sum, mark) => sum + mark, 0) / obj.marks.length)
        .reduce((sum, avg) => sum + avg, 0) / array.length;

    const higherThanClassAverage = getAverage(array)
        .filter(student => student.average > totalAverage);


    alert(`Total average = ${totalAverage},\nstudents with average > total average are ${JSON.stringify(higherThanClassAverage)}`)


}
