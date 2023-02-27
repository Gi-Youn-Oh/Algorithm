function solution(arr) {
    
    answer = arr.reduce((acc, cur, i)=> {return acc + cur}, 0) / arr.length
    
    return answer;
}