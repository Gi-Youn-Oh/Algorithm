function solution(k, tangerine) {
    const counts = {};
    tangerine.forEach(v => counts[v] = (counts[v] ?? 0) + 1); // 각 요소의 개수 객체로 표현
    const sortedCounts = Object.values(counts).sort((a, b) => a - b); // 값만 추출해서 정렬

    const restCount = tangerine.length - k;
    let sum = 0;
    let typeCount = Object.keys(counts).length;
    for (const count of sortedCounts) {
        if (sum + count > restCount) {
            break;
        }
        sum += count;
        typeCount--;
    }

    return typeCount;
}
