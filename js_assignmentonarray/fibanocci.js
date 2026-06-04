function fibonacci(number) {
  let currentTerm = 0;
  let nextTerm = 1;
  let numofTerm = 0;
  const fibonacciArray = [];
  while (numofTerm < number) {
    fibonacciArray.push(currentTerm);
    nextTerm = currentTerm + nextTerm;
    currentTerm = nextTerm - currentTerm;
    numofTerm++;
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
  const actualOutput = fibonacci(numberOfElements);
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
  testResult(5, [0, 1, 1, 2, 3]);
  testResult(8, [0, 1, 1, 2, 3, 5, 8, 13]);
  testResult(10, [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
}
testAll();
