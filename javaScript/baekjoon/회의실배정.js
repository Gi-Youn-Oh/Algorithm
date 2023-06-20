const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, ...arr] = input;

let answer = 0;

const times = arr.map((num) => num.split(' ').map((num) => +num))
.sort((a,b) => {
    if (a[1] === b[1]) {
        return a[0] - b[0];
    } else {
        return a[1] - b[1];
    }
});

let endTime = 0;

times.forEach((time) => {
    if (time[0] >= endTime){
        answer ++;
        endTime = time[1];
    }
})

console.log(answer);





// example
// const arr = ['1 2', '3 4', '5 6'];
// const times = arr
//   .map((num) => num.split(' ').map((num) => +num));

// console.log(times);