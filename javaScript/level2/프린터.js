function solution(priorities, location) {
  let answer = 0;
  // 최댓값이 여러개 존재할 수 있으므로 순회는 해야함
  while (priorities) {
    //최대값보다 작은 경우
    if (priorities[0] < Math.max(...priorities)) {
      // 위치 업데이트
      if (--location < 0) {
        location = priorities.length - 1;
      }
      priorities.push(priorities.shift());
    }
    // 최대값보다 같거나 클 때
    else {
      answer++;
      if (--location < 0) return answer;
      priorities.shift();
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
