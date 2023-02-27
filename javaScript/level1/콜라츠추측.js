function solution(num) {
    let count = 0;
    while (num !== 1){
        if (count > 499) {
            return -1;
        }
        if (num % 2 === 0){
            num = num/2;
            count +=1;
        }
        else{
            num = num*3+1;
            count +=1;
        }
    }
    return count;
}