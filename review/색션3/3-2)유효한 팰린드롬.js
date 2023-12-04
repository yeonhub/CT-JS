function solution(s) {
    return s.replace(/[^a-z]/ig, '').toLowerCase() === s.replace(/[^a-z]/ig, '').toLowerCase().split('').reverse().join('') ? "YES" : "NO"
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));