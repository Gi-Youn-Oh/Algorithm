function solution(a, b) {
    let answer = 0;
    let numbers = [];
    if(a === b){
        answer = a;
    }
    else {
        numbers.push(a, b);
        numbers.sort((a,b)=>a - b);
        for (let i = numbers[0]; i<numbers[1]+1; i++){
            answer += i
        }
    }
    return answer;
}