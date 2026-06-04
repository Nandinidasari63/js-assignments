/*
  Write a function that tells if a string ends with a specific substring

  Examples:
    endsWith('hello world', 'ld') => true
    endsWith('hello world', 'wor') => false
    endsWith('hello world', 'hello') => false

  **Your function must return a value**

  It's not necessary to print the result on screen, 
  however to test your function you are free to print the result
*/
function endsWith(string, subString) {
  const subStringlen = subString.length;

  let index = string.length - subStringlen;
  return isSubstringAt(string, subString, index);

}

function isSubstringAt(string, subString, index) {
  const stringlen = string.length;
  const subStringlen = subString.length;
  for (let term = 0; term < subStringlen; term++) {
    if (string[index + term] !== subString[term]) {
      return false;
    }
    return true;
  }
}

function showTestResult(string, subString, actualOutput, exceptedOutput) {
  const actualOutput = endsWith(string,subString);
  const isExceptedOtput = actualOutput === exceptedOutput;
  const emoji = isExceptedOtput ? "✅" : "❌";
  const expect = "your excepted value is ";
  const actualGot = "but it actually was";
  const inputs = '[' + string + '||' + subString + ']';
  console.log(inputs, emoji, expect, exceptedOutput, actualGot, actualOutput);
}

function testEndsWith(string, subString, exceptedOutput) {
  if (subString.length !== 0){
    
    const actualOutput = endsWith(string, subString);
  }
  
  showTestResult(string, subString, actualOutput, exceptedOutput);
}

function testAll() {
  testEndsWith('hello world', 'ld', true);
  testEndsWith('hello world', 'wor', false);
  testEndsWith('hello world', 'hello', false);
  testEndsWith('nandini', 'ini', true);
  testEndsWith('nandini', 'nan', false);
  testEndsWith('nandini', '', false);
  testEndsWith('nandini', 'for', false);
}

testAll();