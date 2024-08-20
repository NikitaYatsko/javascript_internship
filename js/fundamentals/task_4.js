export function task4() {

    let name = prompt('Input a name')

    name.split('')

    function ucFirst(name) {
        alert(name[0].toUpperCase() + name.slice(1));
    }

    ucFirst(name)

}