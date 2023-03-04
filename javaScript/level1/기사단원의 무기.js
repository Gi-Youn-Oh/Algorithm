function solution(number, limit, power) {
    const nums = [];

    // 1부터 number 까지 약수 개수 확인
    for (let i = 1; i <= number; i++) {
        let divisor = 1;

        // 절반 까지만 돌리기 어차피 n/2보다 클수 없음
        for (let j = 1; j <= i / 2; j++) {
            if (i % j === 0) {
                divisor += 1;
            }
        }

        // 위에서 본래 값을 제외하고 반절만 돌렸기 때문에
        // 본래 값을 넣어준다 생각 하고 1을 더 더해준다.
        nums.push(divisor);
    }

    return nums.map((num) => {
        return num > limit ? power : num;      // n이 limit보다 크게되면 협약기관에서 정한 공격력을 가지는 무기를
        // 그렇지 않으면 그대로 n을 구매한다.
    })
        .reduce((acc, cur) => acc + cur, 0) // 합산
}

// 약수 구하기 제곱근 활용
const getDivisors = (num) => {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            divisors.push(i);
            if (num / i != i) divisors.push(num / i); // 중복 제거
        }
    }

    // divisors.sort((a, b) => a - b);
    return divisors;
}