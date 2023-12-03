function solution() {
    let answer = "";
    let queue = [];
    queue.push(1)

    while (queue.length) {
        let v = queue.shift();
        answer += v + '-'
        for (let nv of [v * 2, v * 2 + 1]) {
            if (nv > 7) {
                continue;
            } else {
                queue.push(nv)
            }
        }
    }
    answer = answer.slice(0, answer.length - 1)

    return answer;
}

console.log(solution());