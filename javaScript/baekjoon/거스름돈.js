const money = parseInt(require('fs').readFileSync('dev/stdin').toString());

let change = 1000 - money;
let count = 0;

const coins = [500, 100, 50, 10, 5, 1];
for (let i = 0; i < coins.length; i++){
    let ea = Math.floor(change / coins[i]);
    change -= ea * coins[i];
    count += ea;
}

console.log(count);