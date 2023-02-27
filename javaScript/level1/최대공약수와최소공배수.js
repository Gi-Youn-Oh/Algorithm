function solution(n, m) {
    let greatest = (a,b) => (b === 0) ? a : greatest(b, a % b)
    let least = (a,b) => (a*b) / greatest(a,b)
    return [greatest(n,m), least(n,m)]
}