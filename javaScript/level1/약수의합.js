function solution(n) {
    let arr = [];
    for (i = 0; i <= n; i++){
        if(n%i === 0){
            arr.push(i);
        }
    }
    console.log(arr)
    let answer = arr.reduce((a,b)=> a + b, 0);
    console.log(answer)
    return answer;
}