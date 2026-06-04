function commandArgs(args){
  console.log(args[0]);
  console.log(args[1]);
}
commandArgs(Deno.args);