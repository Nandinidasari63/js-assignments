function add(x) {
  if (x === 0) return 0;
  return x + add(x - 1);
}
console.log(add(100));
