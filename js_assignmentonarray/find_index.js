function findIndex(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return index;
    }
  }
  return -1;
}

function testResult(array, element, expectedOutput) {
  const actualOutput = findIndex(array, element);
  const isOutput = actualOutput === expectedOutput;
  showTestResult(array, element, actualOutput, expectedOutput, isOutput);
}

function showTestResult(array, element, actualOut, expected, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = `[${array}] ${element}`;
    let extra = emoji + ` inputs   ${inputs} \n   actual   ${actualOut} \n`;
    extra += `expectedOutput  ${expected}`;
    console.log(extra);
  } else {
    const expect = "excepted value ";
    const actualGot = " actual value ";
    let message = emoji + ' ' + expect + '  ' + '[' + expected + ']' + ' ';
    message += ' | ' + actualGot + '[' + actualOut + ']';
    console.log(message + '\n');
  }
}

function testAll() {
  testResult([6, 2, 3, 1, 4, 7], 3, 2);
  testResult([1, 2, 3], 4, -1);
  testResult(["apple", "cake", "tea", "coffee", "tea"], "tea", 2);
}
testAll();