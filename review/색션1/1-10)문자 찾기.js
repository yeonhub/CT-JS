function solution(s, t) {
    let answer = 0;
    for (let ele of s) {
        ele === t ? answer++ : null
    }
    return answer
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));