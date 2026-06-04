
function decimalToBinary(decimalNumber,exceptedOutput) {
  let actualOutput = '';
  if (decimalNumber === 0) {
    actualOutput = actualOutput + 0 ;
  }
  while (decimalNumber !== 0) {
    const bit = decimalNumber % 2;
    decimalNumber = (decimalNumber - (decimalNumber % 2)) / 2;
   actualOutput = actualOutput + bit + " " ;
  }
  const result = actualOutput;
  message(result,exceptedOutput);
}

function message(result,exceptedOutput) {
  const emoji = result === exceptedOutput ? "✅ " : "❌";
  console.log( emoji,"your excepted value is ", exceptedOutput, " but it actually was ", result);  
}

function testFunction()
{
  decimalToBinary(10,"0 1 0 1 ");
  decimalToBinary(13,"1 0 1 1 ");
  decimalToBinary(3,"1 1 ");
  decimalToBinary(0,"0")

}
testFunction();
