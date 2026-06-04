
function firstPrimeAbove(a, exceptedOutput) {
  let currentNumber = a;
  let found = false;
  while (!found) {
     currentNumber = currentNumber + 1;
    if (prime(currentNumber)) {
      found = true;
    }
   
  }
message(currentNumber,exceptedOutput)
}


function prime(a) {
  let isPrime = true;
  if (a > 1) {
    isPrime = true;
    for (let term = 2; term < a; term++) {
      if (a % term === 0) {
       
        isPrime = false;
      }
    }
  } else {
    isPrime = false;
  }
 return isPrime;
}

function message(result, exceptedOutput) {
  const emoji = (result === exceptedOutput) ? "✅ " : "❌";
  console.log(emoji, "your excepted value  is ", exceptedOutput, " but it actually was ", result);
}

function testFunction() {
  firstPrimeAbove(12,13);
  firstPrimeAbove(98,101);
  firstPrimeAbove(3,5);
  firstPrimeAbove(10,11);
}
testFunction();