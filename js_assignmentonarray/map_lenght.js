function mapLengths(words) {
  const lengthOfWords = [];
  for (let indexOfWords = 0; indexOfWords < words.length; indexOfWords++) {
    lengthOfWords.push(words[indexOfWords].length);
  }
  return lengthOfWords;
}

function testResult(array, expectedOutput) {
  const actualOutput = mapLengths(array);
  const isOutput = areEqual(actualOutput, expectedOutput);
  showTestResult(array, actualOutput, expectedOutput, isOutput);
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

function showTestResult(array, actualOut, expected, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = `[${array}]`;
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
  testResult(["apple", "cat", "Four"], [5, 3, 4]);
  testResult(['', '', ' '], [0, 0, 1]);
}
testAll();
