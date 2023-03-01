function solution(X, Y) {
    const hashX = [...Array(10)].fill(0);
    const hashY = [...Array(10)].fill(0);
    // console.log(hashX)
    
    [...X].forEach(num => hashX[num]++);
    [...Y].forEach(num => hashY[num]++);
    // console.log('hashX',hashX)
    
    const answer = hashX.map((num, idx)=> {
        if (num != 0 && hashY[idx] != 0){
            // console.log('num',num);
            // console.log(String(idx));
            return String(idx).repeat(Math.min(num, hashY[idx]));
        }
    })
    // console.log(answer);
    const result = answer.reverse().join('');
    console.log(result);

    return result ? (+result ? result : '0') : '-1';
}