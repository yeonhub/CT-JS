function solution(times) {
    let timeLine = []
    let max = 0
    for (let ele of times) {
        timeLine.push([ele[0], 'a'])
        timeLine.push([ele[1], 'l'])
    }
    timeLine.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0]
        } else {
            return b[1].charCodeAt()-a[1].charCodeAt();
        }
    })
    let num = 0;
    for (let ele of timeLine) {
        if (ele[1] === 'a') {
            num++
        } else if (ele[1] === 'l') {
            num--
        }
        max = Math.max(num, max)
    }

    return max
}

let arr = [[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));