function solution(A,B){
    let answer = 0;
    const sortA = A.sort((a,b) => (a-b));    
    const sortB = B.sort((a,b) => (a-b));    
    for (let i = 0; i < A.length; i++){
        answer += sortA[i]*sortB[sortB.length-1-i];
    }
    return answer;
}