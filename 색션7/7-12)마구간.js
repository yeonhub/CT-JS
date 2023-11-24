function count(stable, dist) {
    let cnt = 1
    let ep = stable[0]
    for (let i = 1; i <= stable.length; i++) {
        if (stable[i] - ep >= dist) {
            cnt++
            ep = stable[i]
        }
    }
    return cnt;
}
function solution(c, stable) {
    let answer
    let sortStable = stable.sort()
    let lt = 1
    let rt = sortStable[sortStable.length - 1]

    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2)
        if (count(sortStable, mid) >= c) {
            answer = mid
            lt = mid + 1
        } else {
            rt = mid - 1
        }
    }
    return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr));