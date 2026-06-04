function numOfDigits(a) {
  let remainingNumber = a;
  let numberOfDigits = 0
  
  while (remainingNumber != 0) {
    const lastDigit = remainingNumber % 10;
    remainingNumber = (remainingNumber - (remainingNumber % 10)) / 10;
    numberOfDigits++;
  }
  return numberOfDigits;
}

function armstrong(a,exceptedOutput)
{ let remainingNumber = a
  let sum = 0;
  while (remainingNumber != 0) {
    const numberOfDigits = numOfDigits(a);
    const lastDigit = remainingNumber % 10;
    remainingNumber = (remainingNumber - (remainingNumber % 10)) / 10;
    sum = sum + lastDigit ** numberOfDigits;
  }
  
  const result = (a === sum) ? true : false;
  message(result,exceptedOutput)  
  
}  
function message(result, exceptedOutput) {
  const emoji = (result === exceptedOutput) ? "✅ " : "❌";
  console.log(emoji, "your excepted value  is ", exceptedOutput, " but it actually was ", result);
}

function testFunction() {
  armstrong(153,true);
  armstrong(371,true);
  armstrong(3,true);
  armstrong(8208,true);
  armstrong(9474826,false);
}
testFunction();
