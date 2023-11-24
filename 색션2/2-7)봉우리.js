function solution(arr) {
    let answer = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let top = i>0 ? arr[i-1][j] : 0;
            let bottom = i<=n ? arr[i+1][j] : 0;
            let left = j>0 ? arr[i][j-1] : 0;
            let right = j<=n ? arr[i][j+1] : 0;
            if(Math.max(arr[i][j], top, bottom, left, right)===arr[i][j]){
                answer ++
            }
        }
    }
    return answer
}

let arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2]
];
console.log(solution(arr));

