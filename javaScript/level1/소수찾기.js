function solution(n) {
    //효율성 통과를 위해 에라토스테네스의 체 이용
    var answer = 0;
    let num = new Array(n + 1);
    //인덱스에 해당 값 세팅
    for (let i = 2; i <= n; i++) {
      num[i] = i;
    }
      
    //각 인덱스의 배수값은 소수가 아니므로 0으로 세팅
    for (let j = 2; j <= n; j++) {
      if (num[j] === 0) continue;
  
      for (let k = j * 2; k <= n; k += j) {
        num[k] = 0;
      }
    }
  
    //0이 아닌 것들은 소수이므로 탐색
    for (let i = 2; i <= n; i++) {
      if (num[i] !== 0) answer += 1;
    }
  
    return answer;
  }