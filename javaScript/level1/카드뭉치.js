function solution(cards1, cards2, goal) {
    for (const s of goal){
        if(s === cards1[0]){
            cards1.shift();
        }else if (s === cards2[0]){
            cards2.shift();
        }else{
            return "No";
        }
    }
    return "Yes";
}