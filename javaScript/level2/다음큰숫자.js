function solution(n) {
    let answer = 0;
    let num = n.toString(2).match(/1/g).length;
    
    for(let i = n+1; i < 1000000; i++){
        // console.log(i)
        if (num == i.toString(2).match(/1/g).length){
            // console.log(i);
            answer = i
            break;
        }
    }
    return answer;
}