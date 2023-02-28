// example
// survey = ["AN", "CF", "MJ", "RT", "NA"]
// choices = [5, 3, 2, 7, 5]

function solution (survey, choices){
    // 타입 순차적 정렬 
    const types = { R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0 };
    let answer = "";
    // 순회하면서 문자열 분리하여 타입 정의
    for (let i = 0; i < choices.length; i++){
        const [left, right] = survey[i].split(""); // ["AN"] -> left = "A", right = "N"
        const result = Math.abs(choices[i] - 4); // 1234567 이기때문에 4를 기준으로 절대값 -3-2-10123
        if(choices[i] < 4){
            // 비동의 -> 왼쪽
            types[left] += result;
        }
        else if (choices[i] > 4){
            // 동의 -> 오른쪽 
            types[right] += result;
        }
    }
    const type = Object.keys(types); // key 값만 
    for (let i = 0; i < type.length; i +=2){ // 좌 0 우 1 좌 2 우3 => +2씩
        const leftType = types[type[i]]; // types["R"] => 0
        const rightType = types[type[i + 1]];
        if (leftType >= rightType){
            // 같거나 크면 왼쪽
            answer += type[i];
        }
        else{
            answer += type[i + 1];
        }
    }

    return answer;
}