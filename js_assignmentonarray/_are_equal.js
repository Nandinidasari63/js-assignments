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

function testResult(array1, array2, expectedOutput) {
  const actualOutput = areEqual(array1, array2);
  const isOutput = actualOutput === expectedOutput;
  showTestResult(array1, array2, actualOutput, expectedOutput, isOutput);
}

function showTestResult(array1, array2, actualOut, expected, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = `[${array1}] [${array2}]`;
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
  testResult([1, 2, 3, 4], [1, 2, 3, 4], true);
  testResult([1, 2, 3], [1, 2, 3, 4], false);
  testResult([1, 2, 3], [1, 3, 2], false);
  testResult([], [], true);
  testResult([1], [1], true);
}
testAll();