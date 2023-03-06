function solution (s) {
    let stack = [];
    let answer = [];

    for (let i = 0; i < s.length; i++){
       if (!stack.includes(s[i])){
        answer.push(-1);
        stack.push(s[i]);
        continue;
       } 
       if (stack.includes(s[i])){
        answer.push(stack.length - stack.lastIndexOf(s[i])); //배열에서 주어진 값을 발견할 수 있는 마지막 인덱스를 반환하고, 요소가 존재하지 않으면 -1을 반환합니다. 
        stack.push(s[i]);
        continue;
       }
    }
    return answer;
}