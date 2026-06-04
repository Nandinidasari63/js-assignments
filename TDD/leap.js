function leapYear(year){
   let isLeap = false;
   if(( year %  400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
      isLeap = true;
   }
   return isLeap;
}
function message(result, exceptedOutput) {
  const emoji = (result === exceptedOutput) ? "✅ " : "❌";
  console.log(emoji, "your excepted value  is ", exceptedOutput, " but it actually was ", result);
}

function testFunction() {
  leapYear(2000,true);
  leapYear(1993,false);
  leapYear(1996,true);
  leapYear(1900,false);
  leapYear(1700,false);
  leapYear(1800,false);
}
