function solution(s) {
    // return s.replaceAll('A','#')
    return s.replace(/A/g, '#')
}

let str = "BANANA";
console.log(solution(str));