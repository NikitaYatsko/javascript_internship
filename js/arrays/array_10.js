export function array10() {
    const array = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];

    function uniqueSorted(arrayToSort) {

        if (arrayToSort.length === 0){
            return alert("Array is empty")
        }
        alert(`Your current arrays is ${arrayToSort}`)
        return alert(`Your unique sorted array is ${Array.from(new Set(arrayToSort)).sort((a,b)=>a-b)}`);

        /*const sortedArray = arrayToSort.sort((a, b) => a - b);
        for (let i = sortedArray.length - 1; i > 0; i--) {
            if (sortedArray[i] === sortedArray[i - 1]) {
                sortedArray.splice(i, 1);
            }
        }*/
    }

    uniqueSorted(array);

}
