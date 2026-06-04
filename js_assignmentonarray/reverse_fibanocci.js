function reverseFibonacci(numberOfTerms) {
  let currentTerm = 0;
  let nextTerm = 1;
  let nthTerm = 0;
  const fibonacciArray = [];
  while (nthTerm < numberOfTerms) {
    fibonacciArray.unshift(currentTerm);
    nextTerm = currentTerm + nextTerm;
    currentTerm = nextTerm - currentTerm;
    nthTerm++;
  }
  return fibonacciArray;
}

function areEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  const arraysLength = array1.length;
  let index;
  for (index = 0; index < arraysLength; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return index === arraysLength;
}

function testResult(numberOfElements, expectedOutput) {
  const actualOutput = reverseFibonacci(numberOfElements);
  const isOutput = areEqual(actualOutput, expectedOutput);
  showTestResult(numberOfElements, actualOutput, expectedOutput, isOutput);
}

function showTestResult(numberOfElements, actualOut, expected, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = `[${numberOfElements}]`;
    let extra = emoji + ` inputs   ${inputs} \n   actual   [${actualOut}] \n`;
    extra += `expectedOutput  [${expected}]`;
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
  testResult(5, [3, 2, 1, 1, 0]);
  testResult(8, [13, 8, 5, 3, 2, 1, 1, 0]);
  testResult(10, [34, 21, 13, 8, 5, 3, 2, 1, 1, 0]);
  testResult(0, []);
  testResult(1, [0]);
  testResult(2, [1, 0]);
}
testAll();
