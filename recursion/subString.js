function isSubString(string, otherString) {
  if (otherString.length === 0 || string.length === 0) {
    return false;
  }
  return eachIndex(string, otherString, 0);
}

function eachIndex(string, subtring, index) {
  if (index > string.length - subtring.length) {
    return false;
  }
  if (checkEqual(string, subtring, index, 0)) {
    return true;
  }
  return eachIndex(string, subtring, index + 1);
}

function checkEqual(string, subString, index, term) {
  const subStringlen = subString.length;
  const stringlen = string.length;
  if (term === subStringlen) {
    return true;
  }
  if (string[index + term] !== subString[term] || index + term >= stringlen) {
    return false;
  }
  return checkEqual(string, subString, index, term + 1)
}

function testSubString(string, char, expectedOutput) {
  const actualOutput = isSubString(string, char);
  const isOutput = actualOutput === expectedOutput;
  showTestResult(string, char, actualOutput, expectedOutput, isOutput);
}

function showTestResult(string, char, actualOutput, expectedOutput, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = ' ' + '[' + string + '  ' + char + ']' + ' ';
    let extra = emoji + ` inputs   ${inputs} \n   actual    ${actualOutput}\n`;
    extra += `expectedOutput ${expectedOutput}`;
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
  testSubString('nandini', 'n', true);
  testSubString('nandini', 'ini', true);
  testSubString('nandini', 'abc', false);
  testSubString('nandini', 'nan', true);
  testSubString('', '', false);
  testSubString('bab', '', false);
  testSubString('nandini', 'inid', false);
  testSubString('nandini', 'ands', false);
  testSubString('hello world', 'lo', true);
  testSubString('hello world', ' ', true);
  testSubString('hello world', 'llo', true);
}
testAll();