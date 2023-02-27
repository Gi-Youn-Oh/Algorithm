function solution(maps) {

    const n = maps.length;
    const m = maps[0].length;

    let answer = -1;

    let visited = Array.from(Array(n), () => Array(m).fill(false));

    let queue = [[0, 0, 1]];

    let queueIndex = 0;

    const positionX = [-1, 0, 1, 0];
    const positionY = [0, 1, 0, -1];


    while (queue.length > queueIndex) {

        let now = queue[queueIndex];
        queueIndex += 1;

        if (now[0] == n - 1 && now[1] == m - 1) {
            answer = now[2];
            break;
        }

        if (!visited[now[0]][now[1]]) {
            visit(now[0], now[1], now[2])
        }
    }

    function visit(x, y, count) {

        visited[x][y] = true;

        for (let i = 0; i < positionX.length; i++) {

            let moveX = x + positionX[i];
            let moveY = y + positionY[i];


            if (moveX >= 0 && moveX < n && moveY >= 0 && moveY < m && !visited[moveX][moveY] && maps[moveX][moveY] == 1) {
                queue.push([moveX, moveY, count + 1]);
            }
        }
    }

    return answer;
}