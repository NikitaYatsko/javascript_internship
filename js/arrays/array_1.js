export function array1() {
    let i = 0;
    let n = parseInt(prompt("How many numbers in array do you want?"));
    let array = Array.from({length: n}, () => Math.floor(Math.random() * 100));

    /*for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }*/
    /* while (i<array.length){
         console.log(array[i]);
         i++;
     }*/

    /* do {
         console.log(array[i]);
         i++
     } while (i < array.length);*/

    /*for (const INDEX in array) {
        console.log(array[INDEX]);
    }*/

    /*for (const NUMBER of array) {
        console.log(NUMBER);
    }*/

    /*array.forEach((number) => {
        console.log(number) ;
    })*/

    /* let newArray = array.map(item => item);
     console.log(newArray)*/

    //самый удобный для меня является стандартный for, он привычнее т.к я изучал базы программирования с Java где он и используется, но хочу отметить что очень удобен Maр
    //потому,что вывоводит элементы в строку.

    array.reduce((accumulator, currentValue) => {
        console.log(currentValue);

    }, []);
    //


}
