function solution(food) {
    let front = "";
    let end = "";
    
    for (let i = 1; i < food.length; i++){
        for (let j = 0; j < Math.floor(food[i] / 2); j++){
            front += i;
            // console.log(front);
        }
    }
    end = front.split("").reverse().join("");
    console.log(end);
    
    return front + "0" + end;
}