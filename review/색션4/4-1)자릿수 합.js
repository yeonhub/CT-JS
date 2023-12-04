function solution(n, arr) {
    let sumArr = []
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        let num = arr[i];
        while (num !== 0) {
            sum += num % 10
            num = Math.floor(num / 10)
        }
        sumArr.push(sum)
    }
    let sumMax = Math.max(...sumArr)
    let maxIdx = []
    for (let i = 0; i < sumArr.length; i++) {
        sumArr[i] === sumMax ? maxIdx.push(i) : null
    }
    let max = 0
    for (let j = 0; j < maxIdx.length; j++) {
        max = Math.max(max, arr[maxIdx[j]])
    }
    return max
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));