export function array2() {
    let n = (prompt("How many numbers in array do you want?"));
    if (n === "" || n === null) {
        alert("Error, type a number")
        return;
    }
    let array = Array.from({length: parseInt(n)}, () => Math.floor(Math.random() * 10));
    alert(`your array is [${getAllTheData(array)}]`);
    let option;
    option = parseInt(prompt("What option do you want to use?\n" +
        "1.Show number less than five\n" +
        "2.Min max index of numbers\n" +
        "3.Sorting\n" +
        "4.Show number that > than average"));
    switch (option) {
        case 1:
            alert(`Numbers < 5 are [${lessThanFive(array)}]`);
            break;
        case 2:
            alert(minMax(array));
            break;
        case 3:
            alert(`Sorted array is ${sort(array)}`);
            break;
        case 4:
            alert(moreThanAverage(array));
    }


    function getAllTheData(arrayData) {// для удобства чтобы видеть массив
        return arrayData.map(item => item);
    }

    function lessThanFive(arrayToFilter) {
        return arrayToFilter.filter(number => number < 5)
    }

    function minMax(arrayToFindMinMax) {
        let minValue = arrayToFindMinMax[0];
        let maxValue = arrayToFindMinMax[0];
        let minIndex = 0;
        let maxIndex = 0;
        for (let i = 1; i < arrayToFindMinMax.length; i++) {
            if (arrayToFindMinMax[i] < minValue) {
                minIndex = i;
                minValue = arrayToFindMinMax[i];
            }
            if (arrayToFindMinMax[i] > maxValue) {
                maxIndex = i;
                maxValue = arrayToFindMinMax[i];
            }
        }
        return (`Minimal value ${minValue} has index ${minIndex}, Maximum value ${maxValue} has index ${maxIndex}`);
    }

    function sort(arrayToSort) {
        arrayToSort.sort((a, b) => b - a)
        /* for (let i = 0; i < arrayToSort.length; i++) {
             for (let j = 0; j < arrayToSort.length - 1; j++) {
                 if (arrayToSort[j + 1] > arrayToSort[j]) {
                     let temp = arrayToSort[j];
                     arrayToSort[j] = arrayToSort[j + 1];
                     arrayToSort[j + 1] = temp;
                 }
             }
         }*/
        return arrayToSort;
    }

    function moreThanAverage(arrayToFindMoreThanAvg) {
        let sum = 0;
        let average;
        let maxNum = arrayToFindMoreThanAvg[0];
        for (let i = 0; i < arrayToFindMoreThanAvg.length; i++) {
            sum = sum + arrayToFindMoreThanAvg[i];
            if (arrayToFindMoreThanAvg[i] > maxNum) {
                maxNum = arrayToFindMoreThanAvg[i];
            }
        }
        average = Math.round(sum / arrayToFindMoreThanAvg.length);
        alert(`your average is ${average}`);
        if (maxNum > average) {
            return `Number is ${(maxNum)}`;
        } else {
            return `there is no number more that average,average is ${average}`;
        }
    }
}