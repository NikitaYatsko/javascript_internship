export function timeDate2(){
  function getDaysInMonth(year,month) {
    return new Date(year,month+1,0).getDate();
  }

  console.log(getDaysInMonth(2024,8));
  console.log(getDaysInMonth(2024,7))
}