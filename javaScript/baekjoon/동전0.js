
const fs = require('fs');
let [N, ...arr] = fs.readFileSync('dev/stdin').toString().trim().split(/\s+/).map(Number);

let target = arr.shift();
arr.sort((a, b) => b - a);

let answer = 0;

for (let i = 0; i < arr.length; i++ ) {
    if (target < arr[i]){
        continue;
    } else {
        const value = Math.floor(target / arr[i]);
        target -= value * arr[i];
        answer += value;
    }

    if (target === 0 ) {
        break;
    }
}

console.log(answer);
