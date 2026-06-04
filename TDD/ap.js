function findingSumOfAp(a,d,n,exceptedOutput){
  let presentTerm = a;
  let sum = 0;
  
  for(let term = 1; term <= n; term++) {
      sum = sum + presentTerm;
      presentTerm = presentTerm + d;
  }
  
  message(sum,exceptedOutput);
}
function message(result, exceptedOutput) {
  const emoji = (result === exceptedOutput) ? "✅ " : "❌";
  console.log(emoji, "your excepted value  is ", exceptedOutput, " but it actually was ", result);
}

function testFunction() {
  findingSumOfAp(10,2,5,70);
  findingSumOfAp(1,2,100,10000);
  findingSumOfAp(0,2,0,0);
  findingSumOfAp(Infinity,2,2,Infinity);
  findingSumOfAp(6,-3,3,9);
}
testFunction();
