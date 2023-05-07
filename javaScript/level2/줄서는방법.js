function solution(n,k){
    const answer = [];
    const people = Array.from({length:n},(_, i) => i+1); // [1, 2, 3];
    let caseNum = people.reduce((ac, v) => ac * v, 1); // [1 * 2 * 3 = 6];
    while(answer.length<n){
        caseNum = caseNum / people.length; // 6 / 3 = 2;
        answer.push(...people.splice(Math.floor((k-1)/caseNum), 1));
        k = k % caseNum;
    }
    return answer;
}
// 나중에 다시 풀어보기