// function solution(n, arr) {
//     let result = 0
//     let arr2 = []
//     for (let i = 0; i < n; i++) {
//         let split = arr[i].toString()
//         let sum = 0
//         for (let j = 0; j < split.length; j++) {
//             sum += Number(split[j])
//         }
//         if(sum>=result){
//             result = sum
//             arr2.push(arr[i])
//         }

//     }
//     return Math.max(...arr2)
// }

// let arr = [128, 460, 603, 40, 521, 137, 123];
// console.log(solution(7, arr));

// function solution(n, arr) {
//     let result = 0;
//     for (let i = 0; i < n; i++) {
//         let num = arr[i];
//         let sum = 0;
//         while (num > 0) {
//             sum += num % 10;
//             num = Math.floor(num / 10);
//         }
//         result = Math.max(result, sum);
//     }
//     return result;
// }

// let arr = [128, 460, 603, 40, 521, 137, 123];
// console.log(solution(7, arr));

function solution(n, arr){
    let answer, max=Number.MIN_SAFE_INTEGER;
    for(let x of arr){
        let sum=0, tmp=x;
        while(tmp){
            sum+=(tmp%10);
            tmp=Math.floor(tmp/10);
        }
        if(sum>max){
            max=sum;
            answer=x;
        }
        else if(sum===max){
            if(x>answer) answer=x;
        }
    }
    return answer;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));