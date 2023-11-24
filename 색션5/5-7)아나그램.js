// function solution(str1, str2){
//     let arrStr1 = {};
//     let arrStr2 = {};

//     for(let ele of str1){
//         if(!arrStr1[ele]){
//             arrStr1[ele] = 1
//         } else {
//             arrStr1[ele] += 1
//         }
//     }
//     for(let ele of str2){
//         if(!arrStr2[ele]){
//             arrStr2[ele] = 1
//         } else {
//             arrStr2[ele] += 1
//         }
//     }
//     return arrStr1 === arrStr2 ? "YES" : "NO"
    
// }

// let a="AbaAeCe";
// let b="baeeACA";
// console.log(solution(a, b));

function solution(str1, str2){
    let arrStr = {};

    for(let ele of str1){
        if(!arrStr[ele]){
            arrStr[ele] = 1
        } else {
            arrStr[ele] += 1
        }
    }
    for(let ele of str2){
        if(arrStr[ele]){
            arrStr[ele] -= 1
        } else if(!arrStr[ele] || arrStr[ele]===0){
            return "NO"
        }
    }
    return "YES"
}
let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b));