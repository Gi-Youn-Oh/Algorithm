const solution = nums => {
    let answer = [...new Set(nums)],
        limit = nums.length / 2;

    return answer.length > limit ? limit : answer.length;
}

// - set 함수를 통한 중복 제거
// - 중복 제거 리스트 vs  가져갈 수 있는 종류의 최대 값