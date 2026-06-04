

// Do not rename startOfTheRange or endOfTheRange, use them as input for your program.
// While testing we will change their values.

const startOfTheRange = 0;
const endOfTheRange = 20;

// Print all the even numbers between startOfTheRange and endOfTheRange (both inclusive)
// For example, if startOfTheRange = 1 and endOfTheRange = 10, then the output should be
// 2
// 4
// 6
// 8
// 10

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let currentNum = (startOfTheRange % 2 === 0) ? startOfTheRange : startOfTheRange++;

while (currentNum <= endOfTheRange) {
  console.log(currentNum);
  currentNum = currentNum + 2;
}
