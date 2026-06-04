// Do not rename p, t or r, use them as input for your program.
// While testing we will change their values.

const p = 1200;
const t = 2;
const r = 6;

// Print the compound interest.
// Do not use compound interest formula to calculate the compound interest.
// Use simple interest formula and a loop to calculate the compound interest.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let new_price = p;
let compound_interst = 0;
for(let year = 1;year <= t;year++)
{

   let annual_interst = (new_price * r)/100 ;
   new_price = new_price + annual_interst;
   compound_interst = compound_interst + annual_interst;
  
}
console.log(compound_interst);
  