const reducer = (array, initialValue) => {
  return array.reduce(oneRow, initialValue);
};

const rectangleArray = function (rectangleSize) {
  const temp = Array(rectangleSize[0]).fill(null);
  //console.log(temp);
  return temp.map((x) => rectangleSize[1]);
};

const triangleArray = function (traingleSize) {
  const temp = Array(traingleSize[0]).fill(null);
  //console.log(temp);
  return temp.map((x,i) =>{ i++;return i;});
};
const reducer = (array, initialValue) => {
  return array.reduce(oneRow, initialValue);
};

const oneRow = (initialValue, value) => initialValue.concat("*".repeat(value));
console.log(reducer(rectangleArray([9, 8]), []).join("\n"));
console.log(reducer(triangleArray([9]),[]).join('\n'));
console.log(reduce())
//[3,4] => [4,4,4]
