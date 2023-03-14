function solution(board) {
    let answer = 0;
    const row = board.length;
    const column = board[0].length;

    if (row < 2 || column < 2) {
        return 1;
    }

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < column; j++) {
            if (board[i][j] === 1){
                board[i][j] = Math.min(board[i][j-1], board[i-1][j], board[i-1][j-1]) + 1;
            }
            answer = Math.max(answer, board[i][j]); // 비교하며 최댓값 갱신
        }
    }
    return answer * answer;
}