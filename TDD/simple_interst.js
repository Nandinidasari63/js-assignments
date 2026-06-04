function simpleInterest(principle, time, rate, exceptedOutput) {
  const interst = (principle * time * rate) / 100;
  message(interst, exceptedOutput);
}

function message(result, exceptedOutput) {
   const appropriate = result - exceptedOutput
  const emoji = appropriate <= 1 ? "✅ " : "❌";
  const expect = "your excepted value is "
  console.log(emoji,expect, exceptedOutput, " but it actually was ", result);
}

function testFunction() {
  simpleInterest(1000, 1, 2, 20);
  simpleInterest(100, 1, 2, 2);
  simpleInterest(1000, 1, 0.5, 5);
  simpleInterest(100000, 1, 2, 2000);
}

testFunction();