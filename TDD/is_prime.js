
function prime(a,exceptedOutput) {
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
  message(a,isPrime,exceptedOutput);
}

function message(n,result,exceptedOutput) {
  const emoji = (result === exceptedOutput) ? "✅ " : "❌";
  console.log( emoji,"your excepted value for ",n," is ", exceptedOutput, " but it actually was ", result);  
}

function testFunction()
{
  prime(2,true);
  prime(3,true);
  prime(1,false);
  prime(10,false);
  prime(97,true);
}
testFunction();
