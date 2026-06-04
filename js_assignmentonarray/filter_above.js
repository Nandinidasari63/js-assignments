function filterAbove(array, threshold) {
  const arrayLength = array.length;
  let indexOfArray;
  const filterArray = [];
  for (indexOfArray = 0; indexOfArray < arrayLength; indexOfArray++) {
    if (array[indexOfArray] > threshold) {
      filterArray.push(array[indexOfArray]);
    }
  }
  return filterArray;
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

function testResult(array, threshold, expectedOutput) {
  const actualOutput = filterAbove(array, threshold);
  const isOutput = areEqual(actualOutput, expectedOutput);
  showTestResult(array, threshold, actualOutput, expectedOutput, isOutput);
}

function showTestResult(array, threshold, actualOut, expected, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = `[${array}] ${threshold}`;
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
  testResult([6, 2, 3, 1, 4, 7], 3, [6, 4, 7]);
  testResult([1, 2, 3], 4, []);
}
testAll();