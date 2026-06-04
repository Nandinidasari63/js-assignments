// Do not rename a, use it as input for your program.
// While testing we will change their values.
// a will be always 1 or greater.
const a = 2;

// Print true(boolean) if a is prime otherwise print false(boolean). DO NOT print "true" or "false".
// Printing more than one output or printing anything other than prime or not prime might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let is_prime = true;
if(a > 1 ){
    is_prime = true;
    for (let iteration = 2; iteration < a; iteration++){

        if(a % iteration === 0){

         is_prime = false;
  
       }
    
    }

}
else{

    is_prime = false;

}
console.log(is_prime);