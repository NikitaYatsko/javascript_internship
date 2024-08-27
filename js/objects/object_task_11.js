export function object11() {
    let option =parseInt(prompt("What option you choose?:\n" +
        "1.Show average grade for each student\n" +
        "2."));
    const arrayOfStudents = [
        {name: "Andrew", marks: [8, 10, 7, 5, 4]},
        {name: "John", marks: [4, 9, 7, 5, 9]},
        {name: "Nick", marks: [8, 8, 8, 5, 4]},
        {name: "Ivan", marks: [6, 10, 7, 5, 6]},
        {name: "Saniok", marks: [8, 10, 9, 5, 8]}
    ];

    switch (option){
        case 1:
            averageGrade(arrayOfStudents);
            break;
        case 2:
            lessThanFiveAverage(arrayOfStudents)
    }

    function averageGrade(array) {
        let arrayOfAverageGrade = [];
        array.forEach(obj => {
            const average = obj.marks.reduce((sum, mark) => sum + mark, 0) / obj.marks.length;
            arrayOfAverageGrade.push({name: obj.name, average: average});
        });
        alert(JSON.stringify(arrayOfAverageGrade,null,2));
    }
    function lessThanFiveAverage(array){

    }
}
