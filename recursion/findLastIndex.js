
function isCharFound(string, char, index) {
  if (string[index] === char) {
    return index;
  }
  if (index >= 0) {
    return isCharFound(string, char, index - 1);
  }
  return -1;
}

function findLastIndex(string, char) {
  const index = string.length - 1;
  return isCharFound(string, char, index);
}

function testIndex(string, char, expectedOutput) {
  const actualOutput = findFirstIndex(string, char);
  const isOutput = actualOutput === expectedOutput;
  showTestResult(string, char, actualOutput, expectedOutput, isOutput);
}

function showTestResult(string, char, actualOutput, expectedOutput, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = ' ' + '[' + string + '  ' + char + ']' + ' ';
    let extra = emoji + ` inputs   ${inputs} \n   actual   ${actualOutput} \n`;
    extra += `expectedOutput  ${expectedOutput}`;
    console.log(extra)
  } else {
    const expect = "your excepted value is ";
    const actualGot = "but it actually was";
    let message = emoji + ' ' + expect + '  ';
    message += '[' + expectedOutput + ']' + ' ';
    message += actualGot + '[' + actualOutput + ']';
    console.log(message + '\n');
  }
}

function testAll() {
  testIndex('nandini', 'a', 1);
  testIndex('nandini', 'd', 3);
  testIndex('nandini', 'i', 6);
  testIndex('nandini', 'n', 5);
  testIndex('nandini', 'z', -1);
}
testAll();