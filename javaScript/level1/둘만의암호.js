function solution (s, skip, index) {
    let answer = "";
    // [^] 괄호안의 문자 제외 
    const regex = new RegExp(`[^${skip}]`, "g");
    const alpabet = "abcdefghijklmnopqrstuvwxyz".match(regex);

    for (const i of s) {
        const idx = alpabet.indexOf(i) + index;
        answer += alpabet[idx % alpabet.length];
    }
    return answer;    
}