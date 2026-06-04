// Return all the elements of array1 which are not present in array2.
// difference([1, 2, 3], [2, 3, 4]) => [1]
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
  for (let index = 0; isArray(array) && index < array.length; index++) {
    if (array[index] === target) {
      return true;
    }
    if (isArray(array[index])) {
      return includes(array[index], target);
    }
  }
  return false;
}

function includes(array, target) {
  let isEqual = false;
  if (isArray(target)) {
    isEqual = areDeepEqual(array, target);
  }
  if (isEqual === true) {
    return true;
  }
  return isValueTargetInArray(array, target);
}

function difference(array1, array2) {
  const differenceArray = [];
  for (let index = 0; index < array1.length; index++) {
    if (!includes(array2, array1[index])) {
      differenceArray.push(array1[index]);
    }
  }
  return differenceArray;
}

function testResult(array1, array2, expectedOutput) {
  const actualOutput = difference(array1, array2);
  const isOutput = areDeepEqual(actualOutput, expectedOutput);
  showTestResult(array1, array2, actualOutput, expectedOutput, isOutput);
}

function showTestResult(array1, array2, actualOut, expected, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = `[${array1}] [${array2}]`;
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
  testResult([1, 2, 3], [2, 3, 4], [1]);
}
testAll();