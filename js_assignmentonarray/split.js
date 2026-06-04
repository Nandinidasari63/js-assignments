// Given a string and a sigle-character delimiter, returns an 
// sentence of strings
// obtained by splitting the input string at each occurrence of the delimiter.
// The delimiter must be a single character.
// Examples:
// split("a,b,c", ",") => ["a", "b", "c"]
// split("one:two:three", ":") => ["one", "two", "three"]
// split("hello", ",") => ["hello"]

function split(sentence, delimiter) {
  const stringsArray = [];
  let start = 0;
  for (let index = 0; index <= sentence.length; index++) {
    if (sentence[index] === delimiter || index === sentence.length) {
      stringsArray.push(sentence.slice(start, index));
      start = index + 1;
    }
  }
  return stringsArray;
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

function testResult(sentence, delimiter, expectedOutput) {
  const actualOutput = split(sentence, delimiter);
  const isOutput = areEqual(actualOutput, expectedOutput);
  showTestResult(sentence, delimiter, actualOutput, expectedOutput, isOutput);
}

function showTestResult(sentence, delimiter, actualOut, expected, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = `[${sentence}] [${delimiter}]`;
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
  testResult("a,b,c", ",", ["a", "b", "c"]);
  testResult("one:two:three", ":", ["one", "two", "three"]);
  testResult("hello", ",", ["hello"]);
  testResult('hello,nandu,', ',', ['hello', 'nandu', '']);
  testResult('','',['']);
}
testAll();
