function solution(sizes) {
    let answer = 0;
    for (let i = 0; i < sizes.length; i++){
        if (sizes[i][0] < sizes[i][1]){
            [sizes[i][0],sizes[i][1]] = [sizes[i][1], sizes[i][0]]
        }
    }
    // test = sizes.sort((a,b) => b[0] - a[0])
    // console.log(test)
    let x = sizes.sort((a,b) => b[0] - a[0])[0][0];
    let y = sizes.sort((a,b) => b[1] - a[1])[0][1];
    answer = x * y;
    return answer;
}