// function solution(k, arr) {
//     let result = sum = cnt = 0;

//     for (let i = 0; i < arr.length - k; i++) {
//         sum += arr[i]
//         cnt++
//         if (cnt === k) {
//             result = Math.max(result, sum);
//             sum = 0;
//             cnt = 0;
//         }
//     }
//     return result
// }

// let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
// console.log(solution(3, a));

// function solution(k, arr) {
//     let result = 0;
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         if (i >= k) {
//             sum -= arr[i - k];
//         }
//         if (i >= k - 1) {
//             result = Math.max(result, sum);
//         }
//     }

//     return result;
// }



function solution(k, arr) {
    let answer, sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    answer = sum;
    for (let i = k; i < arr.length; i++) {
        sum += (arr[i] - arr[i - k]);
        answer = Math.max(answer, sum);
    }
    return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));