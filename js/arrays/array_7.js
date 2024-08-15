export function array7() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function extract(start, end, array) {
        for (let i = start; i < array[end]; i++) {
            console.log(array[i]);
        }
    }
    extract(2,4,array);
}