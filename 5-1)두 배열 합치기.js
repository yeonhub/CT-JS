// function solution(arr1, arr2) {
//     for (let ele of arr2) {
//         arr1.push(ele)
//     }

//     return arr1.sort((a, b) => a - b);
// }

// let a = [1, 3, 5];
// let b = [2, 3, 6, 7, 9];
// console.log(solution(a, b));

function solution(arr1, arr2) {
    // 투포인터 방식
    let result = [];
    let pointer1 = pointer2 = 0;

    while(pointer1<arr1.length && pointer2<arr2.length){
        if(arr1[pointer1] <= arr2[pointer2]){
            result.push(arr1[pointer1])
            pointer1++
        } else {
            result.push(arr2[pointer2])
            pointer2++
        }
    }
    while(pointer1<arr1.length) {
        result.push(arr1[pointer1])
        pointer1++
    }
    while(pointer2<arr2.length) {
        result.push(arr2[pointer2])
        pointer2++
    }
    return result

}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));