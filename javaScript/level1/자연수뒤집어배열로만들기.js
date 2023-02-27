function solution(n) {
    let arr = String(n).split("").reverse().map((data) => Number(data))
    return arr;
}