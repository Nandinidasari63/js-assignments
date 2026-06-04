// Given an array and a value, returns true if the value
//  is present in the array, else false.
// Examples:
// includes([1, 2, 3], 2) => true
// includes([1, 2, 3], 4) => false
// includes([], 1) => false
// do not modify input parameters
function isArray(array) {
  return typeof array === 'object';
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }
  return true;
}

function areDeepEqual(array1, array2) {
  if (typeof array1 !== typeof array2) {
    return false;
  }
  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }
  return array1 === array2;
}

function isValueTargetInArray(array, target) {
  if (isArray(array)) {
    for (let index = 0; index < array.length; index++) {
      if (array[index] === target) {
        return true;
      }
      if (isArray(array[index])) {
        return includes(array[index], target);
      }
    }
  }
  return false;
}

function includes(array, target) {
  let isEqual = false;
  if (isArray(target) && areDeepEqual(array, target)) {
    return true;
  }
  return isValueTargetInArray(array, target);
}

function testResult(array, target, expectedOutput) {
  const actualOutput = includes(array, target);
  const isOutput = actualOutput === expectedOutput;
  showTestResult(array, target, actualOutput, expectedOutput, isOutput);
}

function showTestResult(array, target, actualOut, expected, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = `[${array}] [${target}]`;
    let extra = emoji + ` inputs   [${inputs}] \n   actual  [${actualOut}] \n`;
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
  testResult([1, 2, 3], 2, true);
  testResult([1, 2, 3], 4, false);
  testResult([], 1, false);
  testResult([1, [2, [3, [4]]]], [4], true);
  testResult([1, [2, [3, [6]]]], [2, [3, [6]]], true);
  testResult([[]], [], true);
}

testAll();
