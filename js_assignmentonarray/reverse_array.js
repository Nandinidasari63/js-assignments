function reverse(array) {
  const revArray = [];
  const length = array.length;
  for (let index = 0; index < length; index++) {
    revArray.unshift(array[index]);
  }
  return revArray;
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

function testResult(array, expectedOutput) {
  const actualOutput = reverse(array);
  const isOutput = areEqual(actualOutput, expectedOutput);
  showTestResult(array, actualOutput, expectedOutput, isOutput);
}

function showTestResult(array, actualOutput, expected, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = `[${array}]`;
    let extra = emoji + ` inputs   ${inputs} \n   actual   ${actualOutput} \n`;
    extra += `expectedOutput  ${expected}`;
    console.log(extra);
  } else {
    const expect = "excepted value ";
    const actualGot = " actual value ";
    let message = emoji + ' ' + expect + '  ' + '[' + expected + ']' + ' ';
    message += ' | ' + actualGot + '[' + actualOutput + ']';
    console.log(message + '\n');
  }
}

function testAll() {
  testResult([1, 2, 3], [3, 2, 1]);
  testResult([], []);
  testResult([3, 4, 5], [5, 4, 3]);
}
testAll();
