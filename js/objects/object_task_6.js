export function object6() {
    const ARRAY_OF_OBJECTS = [{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: null, y: 4 }, { x: 3, y: undefined }];

    function filterData(arrayToFilter) {
        return arrayToFilter.filter(point => typeof point.x === 'number' && typeof point.y === 'number');
    }

    console.log(filterData(ARRAY_OF_OBJECTS));
}
