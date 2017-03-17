hello = {
  message: "Hello World!"
}
key = "message"
console.log(hello[key]); // Bracket Notation -- Computed Accessor

function greeting(name){
  console.log(`Hello ${name}!`); // these are backticks (`), they are on tilde key
}

greeting("Betty");
