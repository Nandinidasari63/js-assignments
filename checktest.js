function nextDate(date) {
  if (date.length === 10) {
    return dateformatToNumber(date);
  }
  return 'Invalid Date';
}

function sliceToNum(slice) {
  return parseInt(slice);
}

function formatDate(date, month, year) {
  const padDate = padding(date + '', 2);
  const padMonth = padding(month + '', 2);
  const padYear = padding(year + '', 4);
  return `${padDate}-${padMonth}-${padYear}`;
}

function padding(text, length) {
  return text.padStart(length, '0');
}

function dateformatToNumber(dateInString) {
  const dateSlice = dateInString.slice(0, 2);
  const monthSlice = dateInString.slice(3, 5);
  const yearSlice = dateInString.slice(6, 10);
  const date = sliceToNum(dateSlice);
  const month = sliceToNum(monthSlice);
  const year = sliceToNum(yearSlice);
  return calculateDate(date, month, year);
}

function testDate(dateInString, expectedOutput) {
  const actualOutput = nextDate(dateInString);
  const isOutput = actualOutput === expectedOutput;
  showTestResult(dateInString, actualOutput, expectedOutput, isOutput);
}

function calculateDate(date, month, year) {
  if (isValidYear(year) && isValidMonth(month)) {
    if (isLastDayOfMonth(date, month, year)) {
      return formatDate(1, month + 1, year);
    }
    if (isLastDayOfYear(date, month, year) && year < 9999) {
      return formatDate(1, 1, year + 1);
    }
    if (isValidDateForFebLeap(date, month, year)) {
      return formatDate(date + 1, month, year);
    }
    if (isValidDateForFebNonLeap(date, month)) {
      return formatDate(date + 1, month, year);
    }
    if (isValidDate(date, month)) {
      return formatDate(date + 1, month, year);
    }
  }
  return 'Invalid Date';
}

function isValidYear(year) {
  const yearStartLimit = 0;
  const yearEndLimit = 9999;
  return year >= yearStartLimit && year <= yearEndLimit;
}

function isValidMonth(month) {
  return month > 0 && month < 13;
}

function isValidDateForFebLeap(date, month, year) {
  const dateLimit = date < 29 && date > 0;
  return dateLimit && month === 2 && isLeapYear(year);
}

function isValidDateForFebNonLeap(date, month) {
  return date < 28 && date > 0 && month === 2;
}

function isValidDate(date, month) {
  return date > 0 && date < 31 && month !== 2;
}

function isLastDayOfMonth(date, month, year) {
  const oddMonthBeforeJuly = month % 2 !== 0 && month <= 7;
  const evenMonthBeforeJuly = month % 2 === 0 && month <= 7;
  const evenMonthAfterJuly = month % 2 === 0 && month > 7 && month < 12;
  const oddMonthAfterJuly = month % 2 !== 0 && month > 7 && month < 12;
  if (month === 2 && isLeapYear(year)) {
    return date === 29;
  }
  if (month === 2 && !isLeapYear(year)) {
    return date === 28;
  }
  if (oddMonthBeforeJuly || evenMonthAfterJuly) {
    return date === 31;
  }
  if (evenMonthBeforeJuly || oddMonthAfterJuly) {
    return date === 30;
  }
}

function isLastDayOfYear(date, month) {
  return month === 12 && date === 31;
}

function isLeapYear(year) {
  if (year !== 0) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  }
  return false;
}

function showTestResult(date, actualOut, expected, isOutput) {
  const emoji = isOutput ? "✅" : "❌";
  if (emoji === '❌') {
    const inputs = ' ' + '[' + date + ']' + ' ';
    let extra = emoji + ` inputs   ${inputs} \n   actual   ${actualOut} \n`;
    extra += `expectedOutput  ${expected}`;
    console.log(extra);
  } else {
    const expect = "excepted value ";
    const actualGot = " actual value ";
    let message = emoji + ' ' + expect + '  ';
    message += '[' + expected + ']' + ' ';
    message += ' | ' + actualGot + '[' + actualOut + ']';
    console.log(message + '\n');
  }
}

function testAll() {
  testDate('29-02-2025', 'Invalid Date');
  testDate('29-11-2021', '30-11-2021');
  testDate('29-02-0000', 'Invalid Date');
  testDate('31-05-2025', '01-06-2025');
  testDate('30-06-2025', '01-07-2025');
  testDate('31-07-2025', '01-08-2025');
  testDate('31-08-2025', '01-09-2025');
}

testAll();