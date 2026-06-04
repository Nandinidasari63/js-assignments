//- chunk 2: [1,2,3,4] => [[1,2],[3,4]]; 3,1: [1,2,3,4,5] => [[1,2,3],[3,4,5]];
 // 3,2: [1,2,3,4,5] => [[1,2,3],[2,3,4],[3,4,5]];

function* generator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}
// function* pairs(iter) {
//   let prev = iter.next();
//   let curr = iter.next();
//   while (!curr.done) {
//     yield [prev.value,curr.value];
//     prev = iter.next();
//     curr = iter.next();
//   }
// }


const x = pairs(generator());


// function* pairs(iter) {
//   let prev = iter.next();
//   let middle = iter.next();
//   let curr = iter.next();
//   while (!curr.done) {
//     yield [prev.value,middle.value,curr.value];
//      prev = curr;
//     middle = iter.next();
//     curr = iter.next();
//   }
// }


function* pairs(iter) {
  let prev = iter.next();
  let middle = iter.next();
  let curr = iter.next();
  while (!curr.done) {
    yield [prev.value,middle.value,curr.value];
     prev = middle;middle = curr;
    curr = iter.next();
  }
}