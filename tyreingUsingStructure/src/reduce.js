
const reduceToNUmberOfTimesPresent = function (array, numberOfTimes, value) {
  return array.flatMap(x => x).reduce((numberOfTimes, element) => { if (element === value) { numberOfTimes++; } return numberOfTimes; }, numberOfTimes);
}

const reduceToTotal = function (array, numberOf) {
  return array.flatMap(x => x).reduce((numberOf, currentNumber) => numberOf + currentNumber, numberOf);
}
export {reduceToNUmberOfTimesPresent,reduceToTotal}

