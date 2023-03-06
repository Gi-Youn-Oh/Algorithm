function solution (today, terms, privacies) {
    let current = today.split(".").map((v) => +v); // 더하기 연산자로 문자 -> 숫자로  [ 2022, 5, 19 ]
    let kinds = {};

    // [] => {} 로 변경
    terms.forEach((v) => {
        let [kind, period] = v.split(" ");
        kinds[kind] = period;
    })

    let answer = [];

    privacies.forEach((v, i) => {
        
        let [past, kind] = v.split(" ");
        let [y, m, d] = past.split(".").map((v) => +v);

        m += +kinds[kind];

        d--;

        if (m > 12) {
            if (m % 12 === 0) {
                y +=parseInt(m/12) - 1;
                m = 12;
            }
            else {
                y += parseInt(m/12);
                m = m % 12;
            }
        }
        if (d === 0) {
            m --;
            d = 28;
            if (m === 0) {
                y --;
                m = 12;
            }
        }
        if ( y < current[0]){
            answer.push(i + 1);
        }else if (y === current[0]){
            if (m < current[1]){
                answer.push(i+1);
                return;
            }else if (m === current[1]){
                if (d < current[2]){
                    answer.push(i+1);
                    return;
                }
            }
        }
    })
    return answer;
}

