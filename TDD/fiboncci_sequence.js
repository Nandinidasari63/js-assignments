
function fibnocci_sequence(n,exceptedOutput) {
  let actualOutput = '';
  let currentTerm = 0;
  let nextTerm = 1;
  let numofTerm = 1;

  while (numofTerm <= n) {
    actualOutput = actualOutput + currentTerm + " ";
    nextTerm = currentTerm + nextTerm;
    currentTerm = nextTerm - currentTerm;
    numofTerm++

  }
message(n,actualOutput,exceptedOutput)

}

function message(n,result,exceptedOutput) {
  const emoji = (result === exceptedOutput) ? "✅ " : "❌";
  console.log( emoji,"your excepted value for ",n," is ", exceptedOutput, " but it actually was ", result);  
}

function testFunction()
{
  fibnocci_sequence(2,"0 1 ");
  fibnocci_sequence(3,"0 1 1 ");
  fibnocci_sequence(4,"0 1 1 2 ");
  fibnocci_sequence(5,"0 1 1 2 3 ");
  fibnocci_sequence(6,"0 1 1 2 3 5 ");
  fibnocci_sequence(10,"0 1 1 2 3 5 8 13 21 34 ");
  fibnocci_sequence(1,"0 ");
}
testFunction();