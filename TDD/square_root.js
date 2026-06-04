function squareRootOfNum(a,exceptedOutput){

  const squareRoot = a ** 0.5;
  message(squareRoot,exceptedOutput);
}
function message(result, exceptedOutput) {
  const emoji = (result - exceptedOutput) <= 1 ? "✅ " : "❌";
  console.log(emoji, "your excepted value  is ", exceptedOutput, " but it actually was ", result);
}

function testFunction() {
  squareRootOfNum(4,2);
  squareRootOfNum(2,1.414);
  squareRootOfNum(3,1.7);
  squareRootOfNum(16,4);
}

testFunction();
