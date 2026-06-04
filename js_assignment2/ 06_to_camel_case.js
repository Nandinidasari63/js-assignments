/*
  Implement the below function to convert a string from snake_case
  format into camelCase format.

  Example:
  toCamelCase("hello_wORLd_pro1gram")
    -> "helloWorldPro1gram"
*/

function toCamelCase(sentence) {
    const sentencelen = sentence.length;
  let text = '';
  let index = 0;
  while(index < sentencelen)
  {
    if(sentence[index] === '-'){
      text = text + sentence[index+1];
      index = index+2;
    }
    text = text + sentence[index];
  }
  return text;
}

function checkCamelCase(sentence, expectedOutput) {
  const actualOutput = toCamelCase(sentence);
  const isOutput = actualOutput === expectedOutput;
  showTestResult(sentence, actualOutput, expectedOutput, isOutput);
}

function showTestResult(string, actualOutput, expectedOutput, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  const expect = "your excepted value is ";
  const actualGot = "but it actually was";
  const inputs = '[' + string + ']';
  let message = inputs + ' ' + emoji + ' ' + expect + '  ';
  message += '[' + expectedOutput + ']' + ' ';
  message += actualGot + '[' + actualOutput + ']';
  console.log(message + '\n');
}

function testAll() {
   checkCamelCase("hello_wORLd_pro1gram","helloWorldPro1gram")
}
testAll();