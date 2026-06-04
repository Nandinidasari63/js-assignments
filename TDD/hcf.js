
function findingHcf(a,b,exceptedOutput){

  const big = (a > b) ? a : b;
  let hcf = 0 ;
  for (let iteration = 0; iteration <= big; iteration++) {
    if (a % iteration === 0 && b % iteration === 0) {
      hcf = iteration;
    }
  }
  message(hcf,exceptedOutput);
}

function message(result,exceptedOutput) {
  const emoji = (result === exceptedOutput) ? "✅ " : "❌";
  console.log( emoji,"your excepted value is ", exceptedOutput, " but it actually was ", result);  
}

function testFunction()
{
  findingHcf(3,4,1);
  findingHcf(8,12,4);
  findingHcf(18,24,6);
  findingHcf(0,4,4);
  findingHcf(0,0,0);
}
testFunction();