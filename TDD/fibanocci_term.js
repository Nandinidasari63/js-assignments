function fibonacci(n,exceptedOutput) {
  let currentTerm = 0;
  let nextTerm = 1;
  let numOfTerm = 1;
  
  while (numOfTerm < n) {
    nextTerm = currentTerm + nextTerm;
    currentTerm = nextTerm - currentTerm;
    numOfTerm++
  }
    const nthFibanocciTerm = currentTerm;
    message(n,nthFibanocciTerm,exceptedOutput)
}

function message(n,result,exceptedOutput) {
  const emoji = (result === exceptedOutput) ? "✅ " : "❌";
  console.log( emoji,"your excepted value for ",n," is ", exceptedOutput, " but it actually was ", result);  
}

function testFunction()
{
  fibonacci(10,34);
  fibonacci(25,46368);
  fibonacci(6,5);
  fibonacci(8,13);
  fibonacci(9,21);
}
testFunction();