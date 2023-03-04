function solution (k, m, score){
    // 내림차순 정렬
    score.sort((a,b) => b - a);

    let answer = 0;

    // 최저 사과 점수 (m -1) 세팅
    let idx = m - 1;

    // 최대 상자 개수 만큼 반복문 돌리기
    for (let i = 0; i < Math.floor(score.length / m); i++){

        // idx기준 (최저점수)상자에 담긴 개수를 곱하고 더하기
        answer += score[idx] * m;

        // 상자 여러개를 만들 수 있는 경우 그 다음 상자의 최저 사과 점수 선택
        idx += m;
    }
    return answer;
}