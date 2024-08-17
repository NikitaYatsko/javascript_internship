export function array9() {

    const array = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];
    //const array = [];

    function clear(arrayToClear) {
        if (arrayToClear.length === 0) {
            return alert(`Array is empty ${[]}`);
        }
        return alert(arrayToClear.filter(item => typeof item === 'number'));
    }

    clear(array);

}