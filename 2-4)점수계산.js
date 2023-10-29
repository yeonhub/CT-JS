function solution(arr) {
    let answer = 0, cnt = 0;
    arr.forEach((ele, idx) => {
        ele === 1 ? (cnt++, answer += cnt) : cnt = 0
    })
    return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));