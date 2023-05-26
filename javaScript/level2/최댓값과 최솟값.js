function solution(s) {
    let answer = "";
    let Arr = s.split(" ").map((num) => +num);
    let Min = Arr[0];
    let Max = Arr[0];
    for (let Num of Arr){
        if (Num >= Max){
            Max = Num;
        } else if (Num <= Min){
            Min = Num;
        }
    }
    answer = `${Min} ${Max}`
    return answer;
}