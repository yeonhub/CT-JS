// function solution(s, t){
//     let result = ''
//     for(let i = 0; i<s.length; i++){
//         for(let j = 0; j<s.length; j++){
//             if(s[i]===t){
//                 result += 0;
//             } else if(s[i+j] || s[i-j] === t) {
//                 result += j;
//             }
//         }
//     }
//     return result
// }

// let str="teachermode";
// console.log(solution(str, 'e'));

// function solution(s, t){
//     let result = '';
//     for(let i = 0; i<s.length; i++){
//         if(s[i]===t){
//             result += '0';
//         } else {
//             let found = false;
//             for(let j = 1; j<s.length; j++){
//                 if(i + j < s.length && s[i + j] === t) {
//                     result += j;
//                     found = true;
//                     break;
//                 }
//                 if(i - j >= 0 && s[i - j] === t) {
//                     result += j;
//                     found = true;
//                     break;
//                 }
//             }
//             if (!found) {
//                 result += '0';
//             }
//         }
//     }
//     return result;
// }

// let str="teachermode";
// console.log(solution(str, 'e'));

function solution(s, t){
    let answer = [] ;
    let cnt = 1000;
    for(let x of s){
        if(x===t){
            cnt = 0;
            answer.push(cnt)
        } else {
            cnt++
            answer.push(cnt)
        }
    }
    cnt = 1000;
    for(let i = s.length-1; i>=0; i--){
        if(s[i]===t){
            cnt = 0;
        } else {
            cnt++
            answer[i]=Math.min(cnt, answer[i])
        }
    }
    return answer
}

let str="teachermode";
console.log(solution(str, 'e'));