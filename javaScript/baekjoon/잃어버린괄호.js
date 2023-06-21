

// let test = "55+50-40";

// console.log(solution(test));
function solution(input){
    const numbers = input.split('-').map((str) => str.split('+').map(Number).reduce((acc, cur) => acc + cur, 0));
    console.log(numbers);
    console.log(numbers[0])
    let answer = numbers[0] * 2 - numbers.reduce((acc, cur) => acc + cur, 0);
    return answer;
}


require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    console.log(solution(line));
  })
  .on("close", () => {
    process.exit();
  });
