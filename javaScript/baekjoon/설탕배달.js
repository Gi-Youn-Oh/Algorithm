let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let num = Number(input);
let three = 0;
let five = 0;

while (true) {
  if (num < 0) {
    console.log(-1);
    break;
  }
  if (num % 5 === 0) {
    five = num / 5;
    console.log(five + three);
    break;
  }
  num -= 3;
  three++;
}
