function solution(n){
    let arr = Array.from({length:n+1});
    arr[0] = 0;
    arr[1] = 1;
    for (let i = 2; i <= n; i++){
        arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
    }
    return arr.pop();
}

function solution(n) {
    let answer = 0;
    let t1 = 0, t2 = 1;
    for (let i = 2; i <= n ; i++) {
        answer = (t1 + t2) % 1234567;
        t1 = t2;
        t2 = answer;
    }
    return answer % 1234567;
}