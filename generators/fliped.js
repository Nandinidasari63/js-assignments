//- Flipped consecutive elements [1,2,3,4] => [2,1,4,3];

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
    yield curr.value;yield prev.value;
    prev = iter.next();
    curr = iter.next();
  }
}


const x = pairs(generator());
