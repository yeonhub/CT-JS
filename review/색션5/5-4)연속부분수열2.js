// function solution(m, arr) {
//     let result = sum = start = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//         if (sum <= m) {
//             result++
//         }
//         while (sum >= m) {
//             sum -= arr[start]
//             i = start
//             start++
//             if(sum<=m){
//                 result ++
//             }
//         }
//     }
//     return result
// }

// let a = [1, 3, 1, 2, 3];
// console.log(solution(5, a));

function solution(m, arr){
    let answer=0, sum=0, lt=0;
    for(let rt=0; rt<arr.length; rt++){

        sum+=arr[rt];
        
        while(sum>m){
            sum-=arr[lt++];
        }
        answer+=(rt-lt+1);
    }               
    return answer;
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));