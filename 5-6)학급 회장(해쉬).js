// function solution(s) {
//     let sortArr = s.split('').sort().join('')
//     let result = '';
//     let cnt = 0;
//     let current = 1;

//     for (let i = 0; i < s.length; i++) {
//         if (sortArr[i] === sortArr[i + 1]) {
//             cnt++
//         } else {
//             if (cnt >= current) {
//                 current = cnt
//                 result = sortArr[i]
//             }
//             cnt = 1;
//         }

//     }
//     return result
// }

// let str = "BACBACCACCBDEDE";
// console.log(solution(str));

function solution(s) {
    let answer;
    let max = 0;
    let stringHash = new Map();
    for (let ele of s) {
        if (!stringHash.has(ele)) {
            stringHash.set(ele, 1)
        } else {
            stringHash.set(ele, stringHash.get(ele) + 1)
        }
    }
    for (let [key, value] of stringHash) {
        if (value >= max) {
            max = value
            answer = key
        }
    }
    return answer;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));

function solution(s) {
    let answer;
    let max = 0;
    let stringHash = {};
    for (let ele of s) {
        if (!stringHash[ele]) {
            stringHash[ele] = 1;
        } else {
            stringHash[ele] += 1;
        }
    }
    for (let key in stringHash) {
        if (stringHash[key] >= max) {
            max = stringHash[key];
            answer = key;
        }
    }
    return answer;
}