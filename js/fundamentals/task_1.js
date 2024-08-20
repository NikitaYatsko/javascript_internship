export function task1 (){
    let n = prompt("Input n");
    n = parseInt(n)
    if (n > 0 && n < 10) {
        switch (n) {
            case 1:
                console.log('One')
                break;
            case 2:
                console.log('Two')
                break;
            case 3:
                console.log('Three')
                break;
            case 4:
                console.log('Four')
                break;
            case 5:
                console.log('Five')
                break;
            case 6:
                console.log('Six')
                break;
            case 7:
                console.log('Seven')
                break;
            case 8:
                console.log('Eight')
                break;
            case 9:
                console.log('Nine')
                break;
        }
    } else {
        console.log("Not a digit")
    }
}