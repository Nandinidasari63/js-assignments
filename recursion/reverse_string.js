function reverseString(string){
  if (string === ''){
    return '';
  } 
return reverseString(restOfString(string)) + firstChar(string);
}

function restOfString(string){
  let text = '';
  for(let index = 1;index<string.length;index++){
    text =  text + string[index];

  }
  return text;
}
function firstChar(string){
  return string[0];
}

console.log("reverse of the string is",reverseString('nandu'))