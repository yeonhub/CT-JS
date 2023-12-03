function solution(a, b, c) {
    let answer = 'YES'
    let max = Math.max(a, b, c)
    if (!(a + b + c - max > max)) answer = 'NO'
    return answer;
}

console.log(solution(13, 33, 17));