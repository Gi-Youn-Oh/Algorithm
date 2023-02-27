function solution(arr) {
    if (arr.length < 2) {
        return [-1];
    }
    else {
        arr.sort().reverse().pop();
        return arr;
    }
}