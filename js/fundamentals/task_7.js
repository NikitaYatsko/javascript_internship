export function task7(){
    let age = parseInt(prompt("Write your age: "));

   /* if (age >=14 && age <=90){
        alert("ok")
    } else {
        alert("invalid value")
    }*/

    if (!(age >= 14 && age <= 90)) {
        alert("invalid");
    } else {
        alert("ok");
    }


}