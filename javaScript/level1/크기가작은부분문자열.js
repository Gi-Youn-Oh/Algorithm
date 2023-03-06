function solution (t, p) {
    const checkNumber = Number(p);
    let answer = 0;

    for (let i = 0; i < t.length - p.length + 1; i++){
        const sliced = t.slice(i, i + p.length);
        const numberT = Number(sliced);

        if (numberT <= checkNumber){
            answer += 1;
        }
    }
    return answer;
}