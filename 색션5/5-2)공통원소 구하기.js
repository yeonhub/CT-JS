//  function solution(arr1, arr2){
//      let result = []
//      let sortArr = arr1.length >= arr2.length ? arr2 : arr1
//      let restArr = sortArr === arr1 ? arr2 : arr1

//      for (let i = 0; i < sortArr.length; i++) {
//          if(restArr.includes(sortArr[i])){
//              result.push(sortArr[i])
//          }
//      }
//      return result
//  }
//  let a=[1, 3, 9, 5, 2];
//  let b=[3, 2, 5, 7, 8];
//  console.log(solution(a, b));

function solution(arr1, arr2) {
    let result = []
    let sortArr1 = arr1.sort((a, b) => a - b)
    let sortArr2 = arr2.sort((a, b) => a - b)
    let pointer1 = pointer2 = 0;
    while (pointer1 < sortArr1.length && pointer2 < sortArr2.length) {
        if (sortArr1[pointer1] === sortArr2[pointer2]) {
            result.push(sortArr1[pointer1])
            pointer1++
            pointer2++
        } else {
            if (sortArr1[pointer1] > sortArr2[pointer2]) {
                pointer2++
            } else {
                pointer1++
            }
        }
    }
    return result
}
let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
