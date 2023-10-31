 function solution(s) {
     return s.toLowerCase()===s.split('').reverse().join('').toLowerCase() ? 'YES' : 'NO'
 }

let str = "goooG";
console.log(solution(str));