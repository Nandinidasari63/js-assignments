

function evenNumbers(startOfTheRange, endOfTheRange, exceptedOutput) {

  let actualOutput = '';
  let currentNum = isEven(startOfTheRange)
  while (currentNum <= endOfTheRange) {
    actualOutput = actualOutput + currentNum + " ";
    currentNum = currentNum + 2;
  }
  const result = actualOutput;
  message(result, exceptedOutput);
}

function message(result, exceptedOutput) {
  const emoji = result === exceptedOutput ? "✅ " : "❌";
  const expect = "your excepted value is ";
  console.log(emoji, expect, exceptedOutput, " but it actually was ", result);
}

function testFunction() {
  evenNumbers(1, 4, "2 4 ");
  evenNumbers(3, 8, "4 6 8 ");
  evenNumbers(20, 25, "20 22 24 ");
}

function isEven(startOfTheRange) {
  const DivisibleByTwo = startOfTheRange % 2 === 0;
  const currentNum = DivisibleByTwo ? startOfTheRange : ++startOfTheRange;
  return currentNum;
}

testFunction();
