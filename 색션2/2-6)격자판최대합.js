function solution(arr) {
    let sum1 = 0,
        sum2 = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        sum1 = 0; 
        sum2 = 0; 
        for (let j = 0; j < arr.length; j++) {
            sum1 += arr[i][j];
            sum2 += arr[j][i];
        }
        result = Math.max(result, sum1, sum2);
    }

    sum1 = 0;
    sum2 = 0;
    for (let k = 0; k < arr.length; k++) {
        sum1 += arr[k][k];
        sum2 += arr[k][arr.length - 1 - k];
    }
    result = Math.max(result, sum1, sum2);

    return result;
}

let arr = [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]
];
console.log(solution(arr));