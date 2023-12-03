function solution(s) {
    let answer = ''
    let maxLength = Number.MIN_SAFE_INTEGER;
    for (let ele of s) {
        if (ele.length > maxLength) {
            maxLength = ele.length
            answer = ele
        }
    }
    return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));