function solution(need, plan) {
    let stack = '';
    let now = 0
    for (let i = 0; i < plan.length; i++) {
        if (plan[i] === need[now]) {
            stack += plan[i]
            if (now === need.length-1) {
                break
            } else {
                now++
            }
        }
    };
    return stack===need ? "YES" : "NO"
}

let a = "CBA";
let b = "CBDAGE";
console.log(solution(a, b));