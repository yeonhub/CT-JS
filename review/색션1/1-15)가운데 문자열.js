function solution(s) {
    let answer = ''
    let mid = Math.floor(s.length / 2)
    if (s.length % 2 === 0) {
        answer = s.slice(mid - 1, mid)
    } else {
        answer = s.slice(mid, mid + 1)
    }
    return answer
}
console.log(solution("study"));