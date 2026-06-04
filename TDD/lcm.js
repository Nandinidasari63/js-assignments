function findingLcm(a,b,exceptedOutput){
  let lcm = 1;
  let big;
  let found = false;
  if (b >= a) {
    big = b;
  } else {
    big = a;
  }
  if (a === 0 || b === 0) {
    lcm = 0;
  } else {
    while (big <= a * b && !found) {
      if (((big % a) === 0) && ((big % b) === 0)) {
        lcm = big;
        found = true;
      }
      big++;
    }
  }
  message(lcm,exceptedOutput)
  
}

function message(result, exceptedOutput) {
  const emoji = (result === exceptedOutput) ? "✅ " : "❌";
  console.log(emoji, "your excepted value  is ", exceptedOutput, " but it actually was ", result);
}

function testFunction() {
  findingLcm(20,15,60);
  findingLcm(4,5,20);
  findingLcm(8,14,56);
  findingLcm(0,1,0);
  findingLcm(6,12,12);
}
testFunction();