// - Generate sequences of consecutive pairs [1,2,3,4,5] =>
//   [[1,2],[2,3],[3,4],[4,5]]

function* generator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

function* pairs(iter) {
  let prev = iter.next();
  let curr = iter.next();
  while (!curr.done) {
    yield [prev.value, curr.value];
    prev = curr;
    curr = iter.next();
  }
}

const x = pairs(generator());
