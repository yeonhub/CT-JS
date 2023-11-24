function solution(arr) {
    let highest = 0
    let result = 0
    arr.forEach((ele) => {
        if (ele > highest) {
            highest = ele;
            result++;
        }
    })
    return result
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));