function reverse(a){
  let reverseOfNum = 0;
  let remainingNumber = a;
  
  while (remainingNumber != 0) {
    const lastDigitOfNum = remainingNumber % 10;
    reverseOfNum = reverseOfNum * 10 + lastDigitOfNum;
    remainingNumber = (remainingNumber - (remainingNumber % 10)) / 10;
  }
  return reverseOfNum;
}

function palindrome(a,exceptedOutput){
  const result = (a === reverse(a));
  message(result,exceptedOutput);
}
function message(result, exceptedOutput) {
  const emoji = (result === exceptedOutput) ? "✅ " : "❌";
  console.log(emoji, "your excepted value  is ", exceptedOutput, " but it actually was ", result);
}

function testFunction() {
  palindrome(121,true);
  palindrome(12167,false);
  palindrome(787,true);
  palindrome(1221,true);
  palindrome(2324,false);
}
testFunction();
