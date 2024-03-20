// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// let n = 5;
// let string = "";
// for (let i = 0; i < n; i++) {
//   // printing star
//   for (let k = 0; k < n - i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// let n = 5;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

//

let n = 5;
let string = "";
let pattern = "";
for (let i = 1; i <= n; i++) {
  string = spacing(string, 1, i);
  string = ptr(string, i);
  string += "\n";
}
for (let i = n - 1; i >= 1; i--) {
  let str = "";
  let space = "";
  space = spacing(space, 0, i);
  str = ptr(str, i);
  pattern += space + str + "\n";
}

console.log(string + pattern);

function ptr(str, i) {
  for (let k = 0; k < i * 2 - 1; k++) {
    str += i - 1;
  }
  return str;
}

function spacing(space, type, i) {
  for (let j = type; j < n - i; j++) {
    space += " ";
  }
  return space;
}
