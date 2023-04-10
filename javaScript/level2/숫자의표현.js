// 시간초과
// function solution(n) {
//     let answer = 0;

//     for (let i = 1; i < n+1; i++){
//         let sum = 0;
//         for (let j = i; j < n+1; j++){
//             sum +=j;
//             if (sum === n){
//                 answer +=1;
//             } else if (sum > n){
//                 break;
//             }
//         }
//     }
//     return answer;
// }

// 자연수를 연속된 자연수의 합으로 표현하는 방법의 수는 주어진 수의 홀수 약수의 개수와 같다
function solution(n) {
    let answer = 0;

    for (let i = 1; i < n+1; i++){
        if(n % i === 0 && i % 2 === 1) {
            answer ++;
        }
    }
    return answer;
}