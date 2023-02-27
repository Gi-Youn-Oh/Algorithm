function solution(n, lost, reserve) {
    
    let answer = 0;
    
    const needHelp = lost.sort((a,b)=>a-b).filter((lost)=>!reserve.includes(lost));
    
    let helper = reserve.sort((a,b)=>a-b).filter((reserve)=> !lost.includes(reserve));

    const finalLost = needHelp.filter((lost) => {
        
        const lend = helper.find((reserve) => Math.abs(reserve - lost) == 1);
        if(!lend) return lost;
        
        helper = helper.filter((reverse) => reverse !== lend);

    })

    answer = n - finalLost.length;
    
    return answer;
}