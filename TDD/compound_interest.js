function findingCompoundInterest(p, t, r, exceptedOutput) {
  let prinicipal = p;
  let compoundInterst = 0;

  for (let currentYear = 1; currentYear <= t; currentYear++) {
    const annualInterst = (prinicipal * r) / 100;
    prinicipal = prinicipal + annualInterst;
    compoundInterst = compoundInterst + annualInterst;
  }
  const result = compoundInterst;
  message(result, exceptedOutput)
}

function testFunction() {
  findingCompoundInterest(1200, 2, 6, 148.32);
  findingCompoundInterest(2500, 3, 8, 649.28);
  findingCompoundInterest(100, 2, 2, 4.04);
  findingCompoundInterest(500, 3, 5, 78.8125);
  findingCompoundInterest(1000, 2, 10, 210);
}

function message( result, exceptedOutput) {
  const appropriate = result - exceptedOutput
  const emoji = appropriate <= 1 ? "✅ " : "❌";
  const expect = "your excepted value is "
  console.log(emoji, expect, exceptedOutput, " but it actually was ", result);
}
testFunction();