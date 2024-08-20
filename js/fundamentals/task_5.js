export function task5() {

    function extractValue(value) {
        return (parseInt(value.slice(1)));
    }

    alert(extractValue('$120') === 120)

}