function solution(a, b) {
    let test = [];
    for (let i = 0; i<a.length; i++){
        test.push(a[i]*b[i]);
    }
    let result = 0;
    for (let j = 0; j<test.length; j++){
        result += test[j];
    }
    console.log(result);
    return result;
}