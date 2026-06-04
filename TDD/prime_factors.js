
function primeFactors(a, exceptedOutput) {
  let startOfRange = 2;
  const endOfRange = a;
  let changingNum = a;
  let currentTerm = startOfRange;
  let actualOutput = "";

  while (currentTerm <= endOfRange) {
    if (prime(currentTerm)) {
      if (changingNum % currentTerm === 0) {
        actualOutput = actualOutput + currentTerm + " ";
        changingNum = changingNum / currentTerm;
        currentTerm = 1;
        if (changingNum < 2) {
          break;
        }
      }

    }
    currentTerm++;
  }

  message(a, actualOutput, exceptedOutput)
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

function message(a, result, exceptedOutput) {
  const emoji = (result === exceptedOutput) ? "✅ " : "❌";
  console.log(emoji, "your excepted value for ", a, " is ", exceptedOutput, " but it actually was ", result);
}

function testFunction() {
  primeFactors(12, "2 2 3 ");
  primeFactors(79, "79 ");
  primeFactors(100, "2 2 5 5 ");
  primeFactors(84, "2 2 3 7 ");
}
testFunction();

