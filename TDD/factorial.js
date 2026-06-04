
function factorialOfNum(n,exceptedOutput) {
  let product = 1;
  for (let term = n; term > 0; term--) {
    product = product * term;

  }
  const factorial = product
  message(n,factorial,exceptedOutput)
}

function message(n,result,exceptedOutput) {
  const emoji = (result === exceptedOutput) ? "✅ " : "❌";
  console.log( emoji,"your excepted value for ",n," is ", exceptedOutput, " but it actually was ", result);  
}

function testFunction()
{
  factorialOfNum(0,1);
  factorialOfNum(2,2);
  factorialOfNum(3,6);
  factorialOfNum(1,1)
  factorialOfNum(4,24)
  factorialOfNum(5,120)
    

}
testFunction();