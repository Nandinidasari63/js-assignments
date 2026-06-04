
function isCharFound(string, char, index) {
  if (string[index] === char) {
    return index;
  }

  if (index < string.length - 1) {
    return isCharFound(string, char, index + 1);
  }

  return -1;
}

function findIndex(string, char) {
  const index = 0;

  return isCharFound(string, char, index);
}

function testIndex(string, char, expectedOutput) {
  const actualOutput = findIndex(string, char);
  const isOutput = actualOutput === expectedOutput;

  showTestResult(string, char, actualOutput, expectedOutput, isOutput);
}

function showTestResult(string, char, actualOutput, expectedOutput, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = ' ' + '[' + string + '  ' + char + ']' + ' ';
    let extra = emoji + ` inputs   ${inputs} \n   actual   ${actualOutput} \n`;
    extra += `expectedOutput  ${expectedOutput}`;
    console.log(extra);
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
  testIndex('nandini', 'i', 4);
  testIndex('nandini', 'n', 0);
  testIndex('nandini ca', 'c', 8);
  testIndex('hello world', 5, -1);
  testIndex('jayanth', undefined, -1);
  testIndex('', '', -1);

}

testAll();