const a = 98;
let number = a + 1;
let is_prime = true;
while (true) {
  is_prime = true;
  if (number > 1) {
    for (let iteration = 2; iteration < number; iteration++) {
      if (number % iteration === 0) {
        is_prime = false;
      }
    }
  } else {
    is_prime = false;
  }
  if (is_prime) {
    console.log(number);
    break;
  }
  number = number + 1;
}