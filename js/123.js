//это файл где я решаю задачи с код варс для тренировки своих умений

const string = "Robin 123 Singh";
const array = Array.from(string.split(" "));
console.log(array);


const array1 = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, 2, true, true,
    false, false, true, true]

function countSheeps(sheep) {

    let count = 0;
    for (let i = 0; i < sheep.length; i++)
        if (sheep[i] === true && typeof sheep[i] === 'boolean') {
            count++;
        }
    return count;
}

console.log(countSheeps(array1));

const games = ["3:1", "2:2", "0:1"];

function points(games) {
    let x = 0;

    for (let i = 0; i < games.length; i++) {
        let result = games[i].split(':');
        console.log(result)
        let ourScore = parseInt(result[0]);
        let opponentScore = parseInt(result[1]);

        if (ourScore > opponentScore) {
            x += 3;
        } else if (ourScore === opponentScore) {
            x += 1;
        }

    }

    return x;
}

console.log(points(games))


const arrayOfNumbers = [1, 1, 12, 3, 2, 34, 34, 5, 7, 8, 3, 6, 7, 3, 1, 6, 7, 4, 34]

function find(a, e) {
    return a.indexOf(e) !== -1 ? a.indexOf(e) : "not found";
}

result = find(arrayOfNumbers, 1);
console.log(result);

let stringg = "lorem ipsum dolor sit amet consectetur adipisicing elit Accusamus nostrum!";

function reverseWord(stringToReverse) {
    return stringToReverse.split(' ').reverse().join(' ');

}

console.log(reverseWord(stringg));

function boolToWord(bool) {
    return bool ? 'Yes' : "No";
}

let name = "John Smith"

function abbrevName(name) {
    const array = name.split(' ')
    console.log(array);
    let abbrev = [];
    for (let i = 0; i < array.length; i++) {
        abbrev.push(array[i].charAt(0).toUpperCase());
    }
    return abbrev.join(".")

}

console.log(abbrevName(name));