function solution(x) {
    sum = 0;
    let part = String(x).split('');
    for (let i = 0; i < part.length; i++){
        sum += Number(part[i]);
    }
    return (x % sum === 0) ? true : false;
}