function checkTicTacToe(board, sign) {
    // winner case check
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (const [a, b, c] of lines) {
      if (board[a] == sign && board[b] == sign && board[c] == sign) return true;
    }
    return false;
  }
  
  function solution(board) {
    // ['O', '.', 'X', '.', 'O', '.', '.', '.', 'X'] 1차원 배열로 변환
    board = board.map(val => val.split('')).flat();
    /**예외 상황 
     O와 X의 개수가 올바르지 않은 경우.
     O와 X 둘 다 승리하는 경우.
     O가 승리했는데 X가 수를 더 놓는 경우.
     X가 승리했는데 O와 X의 수가 같지 않은 경우.
    */
    let [O, X] = [0, 0];
  
    for (const sign of board) {
      if (sign === 'O') O++;
      else if (sign === 'X') X++;
    }

    // - O가 X보다 작은 경우.
    // - O와 X의 차이가 2이상 나는 경우
    if (O < X || 1 < O - X) return 0;
  
    let oWins = checkTicTacToe(board, 'O');
    let xWins = checkTicTacToe(board, 'X');
  
    if (oWins && xWins) return 0; // O와 X 둘 다 승리하는 경우.
    if (oWins && O - X !== 1) return 0; // O가 승리했는데 X가 수를 더 놓는 경우.
    if (xWins && O !== X) return 0; // X가 승리했는데 O와 X의 수가 같지 않은 경우.
  
    return 1;
  }