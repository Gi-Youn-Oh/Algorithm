// example wallpaper = [".#...", "..#..", "...#."]

function solution(wallpaper) {
    // x,y좌표
    const x = [];
    const y = [];

    for (let i = 0; i < wallpaper.length; i++){
        for (let j= 0; j < wallpaper[i].length; j++){

            if (wallpaper[i][j] === '#'){
                y.push(i);
                x.push(j);
            }
        }
    }
    // 최소한의 거리를 구하기 위해 오름차순 정렬
    x.sort((a,b) => a-b);
    y.sort((a,b) => a-b);
    //파일의 길이 때문에 + 1
    return [y[0], x[0], y[y.length-1] + 1, x[x.length-1] + 1];
}