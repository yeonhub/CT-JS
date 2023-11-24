function solution(n, k) {
    let kings = [];

    for (let i = 1; i < n + 1; i++) {
        kings.push(i)
    }
    while (kings.length !== 1) {
        for (let i = 0; i < k; i++) {
            let current = kings.shift()
            kings.push(current)
        }
        kings.pop()
    }
    return kings[0]
}

console.log(solution(8, 3));