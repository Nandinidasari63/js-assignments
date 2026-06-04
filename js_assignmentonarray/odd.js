function isOdd(number) {
  return number % 2;
}

function selectOdds(numbers) {
  const arrayLength = numbers.length;
  let indexOfNumbers;
  const oddArray = [];
  for (indexOfNumbers = 0; indexOfNumbers < arrayLength; indexOfNumbers++) {
    if (isOdd(numbers[indexOfNumbers])) {
      oddArray.push(numbers[indexOfNumbers]);
    }
  }
  return oddArray;
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
  const actualOutput = selectOdds(array);
  const isOutput = areEqual(actualOutput, expectedOutput);
  showTestResult(array, actualOutput, expectedOutput, isOutput);
}

function showTestResult(array, actualOut, expected, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = `[${array}]`;
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
  testResult([1, 2, 3], [1, 3]);
  testResult([2, 4, 6], []);
  testResult([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 3, 5, 7, 9]);
}
testAll();