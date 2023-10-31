function solution(n, k, card) {
    let result = 0;
    let sortArr = card.sort((a, b) => a - b);
    let sumArr = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (i !== k && i !== j && j !== k) {
                    sumArr.push(sortArr[i] + sortArr[j] + sortArr[k])
                }
            }
        }
    }
    let uniqeSumArr = [...new Set(sumArr)];
    result = uniqeSumArr.sort((a, b) => b - a)[k - 1]
    return result;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));