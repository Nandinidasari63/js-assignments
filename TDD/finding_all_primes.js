
function findingAllPrimes(startOfRange,endOfTheRange,exceptedOutput) {
  let actualOutput = '';

  while (startOfRange <= endOfTheRange) {
    
    if (prime(startOfRange)) {
      actualOutput = actualOutput + startOfRange + " ";
    }
    startOfRange++;
  }
  message(actualOutput,exceptedOutput);
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


function message(result,exceptedOutput) {
  const emoji = (result === exceptedOutput) ? "✅ " : "❌";
  console.log( emoji,"your excepted value is ", exceptedOutput, " but it actually was ", result);  
}

function testFunction()
{
  findingAllPrimes(10,20,"11 13 17 19 ");
  findingAllPrimes(1,10,"2 3 5 7 ");
  findingAllPrimes(1,5,"2 3 5 ");
  findingAllPrimes(20,30,"23 29 ");
  findingAllPrimes(40,50,"41 43 47 ");
}
testFunction();