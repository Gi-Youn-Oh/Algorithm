function solution(left, right) {
    let count = 0;
    for(let i = left; i<=right; i++) {
        let array = [];
        for(let j = 0; j <= i; j++) {
            if(i % j === 0) array.push(j)
        }
        array.length % 2 === 0 ? count += i : count -= i
    }

    return count
}