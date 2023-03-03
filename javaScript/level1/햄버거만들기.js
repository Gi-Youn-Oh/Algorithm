function solution(ingredient) {
    let answer = 0;
    const stack = [];
  
    for (let i of ingredient) {
      stack.push(i);
  
      if (stack.slice(-4).join('') == '1231') { // 끝에서 4개 자리수
        stack.splice(-4); // -4번 인덱스부터 이후 모두 제거
        answer++;
      }
    }
    return answer;
  }