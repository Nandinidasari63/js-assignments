//- Generate all pair permutations [1,2,3,4,5] =>
//[[1,2],[1,3],[1,4],[1,5],[2,3],[2,4],[2,5],...]

function* generator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

// function* pairPermute(iter){
//   let array = [...iter];
//  yield Iterator.from(array).flatMap(x => x.slice(x+1).map(a => [x,a]))

// }

const x = pairPermute(generator())
  

function* pairPermute(iter) {
  const arr = [...iter];

  const it = Iterator.from(arr).flatMap((x, i) =>
    Iterator.from(arr.slice(i + 1)).map(y => [x, y])
  );

  yield* it;   // iterate it lazily
}

const x = pairPermute(generator());
console.log([...x]);
