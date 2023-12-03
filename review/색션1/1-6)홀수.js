function solution(arr) {
    let odd = []
    let oddMin = Number.MIN_SAFE_INTEGER
    let oddSum = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            odd.push(arr[i])
        }
    }
    oddSum = odd.reduce((a, b) => a + b)
    oddMin = Math.min(...odd)

    return "sum = " + oddSum + " " + "min = " + oddMin
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));