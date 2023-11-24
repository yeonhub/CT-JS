function solution(s){
    return s.replaceAll(/[^a-z]/gi,'').toLowerCase()===s.replaceAll(/[^a-z]/gi,'').toLowerCase().split('').reverse().join('') ? 'YES' : 'NO'
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));