function solution(n) {
    let answer = n + "";
    let answer2 = answer.split('') 
    return Number(answer2.sort((a, b) => b - a).join(''));
}