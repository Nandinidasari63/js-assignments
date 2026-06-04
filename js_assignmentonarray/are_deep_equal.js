// Given array1 and array2, returns true if both arrays are deeply 
// equal, else false.
// Deep equality means both arrays contain the same elements in the same order,
// including any nested arrays, which must also be deeply equal.
// Examples:
// areDeepEqual([1, 2, 3], [1, 2, 3]) => true
// areDeepEqual([1, [2, 3]], [1, [2, 3]]) => true
// areDeepEqual([1, [2, 3]], [1, [3, 2]]) => false
// areDeepEqual([1, 2], [1, 2, 3]) => false
// areDeepEqual([1, [2, [3]]], [1, [2, [3]]]) => true
// areDeepEqual([1, [2, [3]]], [1, [2, 3]]) => false
// do not modify input parameters
function checkEquality(array1, array2) {
  for (let index = 0; index < array1.length; index++) {
    if (typeof array1[index] !== 'object') {
      if (array1[index] !== array2[index]) {
        return false;
      }
    } else {
      return areDeepEqual(array1[index], array2[index]);
    }
  }
  return true;
}

function areDeepEqual(array1, array2) {
  if (typeof array1 === 'object' && typeof array2 === 'object') {
    if (array1.length === array2.length) {
      return checkEquality(array1, array2);
    }
  }
  return false;
}

function testResult(array1, array2, expectedOutput) {
  const actualOutput = areDeepEqual(array1, array2);
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
  testResult([1, [2, 3]], [1, [2, 3]], true);
  testResult([1, [2, 3]], [1, [3, 2]], false);
  testResult([1, [2, [3]]], [1, [2, [3]]], true);
  testResult([[[[[]]]]], [[[[[]]]]], true);
  testResult('abc', ['a', 'b', 'c'], false);
  testResult(8, 'ji', false);
  testResult([1, [2, [3, [4]]]], [1, [2, [3, 4]]], false);
  testResult([1, [2, [3, [4]]]], [1, [2, [3, [4]]]], true);
}

testAll();