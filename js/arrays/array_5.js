export function array5() {
    function convert(fn, array) {
        return array.map(fn);
    }

    function square(x) {
        return x * x;
    }

    let arr = [1, 2, 3, 4];
    console.log(convert(square, arr));
    console.log(convert(square, []));
    console.log(arr);

    //не понимаю до конца как именно работает,пользовался чатом

}