const FILL_RECT = "filled-rectangle";
const HOLLOW_RECT = 'hollow-rectangle';
const ALT_RECT = "alternating-rectangle";
const SPACE_ALT_RECT = 'spaced-alternating-rectangle';
const TRIANGLE = 'triangle';
const RIGHT_TRIANGLE = "right-aligned-triangle";
const DIAMOND = 'diamond';

function filledRect(dimensions) {
  const columns = dimensions[0];
  const patternString = []
  const rows = dimensions[1];
  for (let currentRow = 0; currentRow < rows; currentRow++) {
    patternString.push(fill('*', columns))
  }
  return patternString.join('\n');
}

function fill(character, columns) {
  return character.repeat(columns);
}
// function hollowRect(dimensions) {
//   const columns = dimensions[0];
//   const patternString = [];
//   const rows = dimensions[1];

//   for (let currentRow = 0; currentRow < rows; currentRow++) {


//   return patternString.join('\n');
// }

function isodd(row) {
  return row % 2;
}

function alterRect(dimensions) {
  const columns = dimensions[0];
  let patternString = '';
  const rows = dimensions[1];

  for (let currentRow = 1; currentRow <= rows; currentRow++) {
    patternString += isodd(currentRow) ? fill('*', columns) : fill('-', columns);
    patternString += '\n';
  }

  return patternString.trim();
}

function fillColumns(rows, columns) {
  const value = rows % 3;
  switch (value) {
    case 1:
      return fill('*', columns);
    case 2:
      return fill('-', columns);
    case 0:
      return fill(' ', columns);
  }
}

function spaceAlterRect(dimensions) {
  const columns = dimensions[0];
  let patternString = '';
  const rows = dimensions[1];
  for (let currentRow = 1; currentRow <= rows; currentRow++) {
    patternString += fillColumns(currentRow, columns) + '\n';
  }
  return patternString.slice(0, patternString.length - 1);
}

function triangle(size) {
  const patternString = [];
  for (let row = 1; row <= size; row++) {
    patternString.push(fill('*', row));
  }
  return patternString.join('\n');
}

function rightTriangle(size) {
  let patternString = '';
  for (let row = 1; row <= size; row++) {
    patternString += fill(' ', size - row) + fill('*', row) + '\n';
  }
  return patternString.trimEnd();
}

function diamond(size) {
  let patternString = '';
  for (let row = 0; row < size; row++) {
    if (row === Math.floor(size / 2)) {
      patternString += fill('*', size) + '\n';
    }
    else {

    }
  }
  return patternString;
}

function generatePattern(style, dimensions) {
  if (dimensions[0] === 0 || dimensions[1] === 0) {
    return '';
  }
  switch (style) {
    case FILL_RECT:
      return filledRect(dimensions);
    case HOLLOW_RECT:
      return hollowRect(dimensions);
    case ALT_RECT:
      return alterRect(dimensions);
    case 'spaced-alternating-rectangle':
      return spaceAlterRect(dimensions);
    case 'triangle':
      return triangle(dimensions[0]);
    case 'right-aligned-triangle':
      return rightTriangle(dimensions[0]);
    case 'diamond':
      return diamond(dimensions[0]);
  }
}

function testResult(style, dimensions, expectedOutput) {
  const actualOutput = generatePattern(style, dimensions);
  const isOutput = actualOutput === expectedOutput;
  showTestResult(style, dimensions, actualOutput, expectedOutput, isOutput);
}

function showTestResult(style, dimensions, actualOut, expected, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = `[${style}] [${dimensions}]`;
    let extra = emoji + ` inputs   ${inputs} \n   actual   ${actualOut} \n`;
    extra += `expectedOutput  ${expected}`;
    console.log(extra);
  } else {
    const expect = "excepted value ";
    const actualGot = " actual value ";
    let message = emoji + ' ' + expect + '  ' + expected + ' ';
    message += ' | ' + actualGot + actualOut;
    console.log(message + '\n');
  }
}

function underScore(text) {
  return '-'.repeat(text.length);
}

function testCasesForHollow() {
  console.log(underScore('Hollow Rectangle'));
  console.log('Hollow Rectangle');
   console.log(underScore('Hollow Rectangle'));
  testResult(HOLLOW_RECT, [5, 1], '*\n*\n*\n*\n*');
  testResult(HOLLOW_RECT, [5, 1], '*****\n*   *\n*   *\n*****');
  testResult(HOLLOW_RECT, [0, 0], '');
  testResult(HOLLOW_RECT, [0, 0], '');
}

function testCasesForAlternate() {
  console.log(underScore('Alternate Rectangle'));
  console.log('Alternate Rectangle');
  console.log(underScore('Alternate rectangle'));
  testResult(ALT_RECT, [3, 3], '***\n---\n***');
  testResult(ALT_RECT, [5, 4], '*****\n-----\n*****\n-----');
  testResult(ALT_RECT, [6, 2], '******\n------');
  testResult(ALT_RECT, [4, '1'], '****');
  testResult(ALT_RECT, [0, 5], '');
  testResult(ALT_RECT, [7, 0], '');
}

function testCaseForSpaceAlter() {
  console.log(underScore('Spaced Alternating Rectangle'));
  console.log('Spaced Alternating Rectangle');
  console.log(underScore('Spaced Alternating Rectangle'));
  testResult(SPACE_ALT_RECT, [3, 4], '***\n---\n   \n***');
  testResult(SPACE_ALT_RECT, [5, 6], '*****\n-----\n     \n*****\n-----\n     ');
  testResult(SPACE_ALT_RECT, [4, 3], '****\n----\n    ');
  testResult(SPACE_ALT_RECT, [6, 2], '******\n------');
  testResult(SPACE_ALT_RECT, [0, 3], '');
  testResult(SPACE_ALT_RECT, [7, 0], '');
}

function testCaseForTriangle() {
  console.log(underScore('Triangle'));
  console.log('Triangle');
  console.log(underScore('Triangle'));
  testResult(TRIANGLE, [3], '*\n**\n***');
  testResult(TRIANGLE, [4], '*\n**\n***\n****');
  testResult(TRIANGLE, [1], '*');
  testResult(TRIANGLE, [0], '');
}
function testCaseForRightTriangle() {
  console.log(underScore(' Right Aligned Triangle'));
  console.log('Right Aligned  Triangle');
  console.log(underScore('Right Aligned Triangle'));
  testResult(RIGHT_TRIANGLE, [5], '    *\n   **\n  ***\n ****\n*****');
  testResult(RIGHT_TRIANGLE, [4], '   *\n  **\n ***\n****');
  testResult(RIGHT_TRIANGLE, [3], '  *\n **\n***');
  testResult(RIGHT_TRIANGLE, [0], '');
  testResult(RIGHT_TRIANGLE, [1], '*');
}

function testCaseForDiamond() {
  console.log(underScore('Diamond'));
  console.log('Diamond');
  console.log(underScore('Diamond'));
  testResult(DIAMOND, [4], ' * \n***\n * ');
  testResult(DIAMOND, [1], '*')
  testResult(DIAMOND, [0], '');
  testResult(DIAMOND, [5], '  *  \n *** \n*****\n *** \n  *  ')
}
function testCaseForFilledRect() {
  testResult(FILL_RECT, [5, 3], '*****\n*****\n*****');
  testResult(FILL_RECT, [2, 4], '**\n**\n**\n**');
  testResult(FILL_RECT, [0, 3], '');
  testResult(FILL_RECT, [6, 0], '');
  testResult(FILL_RECT, [0, 0], '');
}


function testAll() {
  testCaseForFilledRect();
  // testCasesForHollow();
  // testCasesForAlternate();
  // testCaseForSpaceAlter();
  testCaseForTriangle();
  // testCaseForRightTriangle();
  //testCaseForDiamond();
}
testAll();