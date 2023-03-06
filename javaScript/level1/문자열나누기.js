function solution (s) {
    let stack = [];
    let answer = 0;

    for (let i = 0; i < s.length; i ++){
        stack.push(s[i]);

        const same = stack.filter((n) => n === stack[0]); //첫 문자열과 같은 문자열 만 
        const notSame = stack.filter((n) => n !== stack[0]); // 첫 문자열과 같지 않은 문자열만

        if (same.length === notSame.length){ // 길이 비교해서 같을 때 분리 (count +1)
            answer += 1;
            stack = [];
        }
    }
    if (stack.length !== 0){ //만약 자리수가 맞지 않게 나머지가 남아 있다면 
        answer += 1;
    }
    return answer;

}