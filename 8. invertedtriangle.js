


let n = 7;


let string = "";

for (let i = n; i >= 0; i--) {

  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);