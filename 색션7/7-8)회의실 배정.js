function solution(arr) {
    let answer = 0;
    let endTime = 0;
    arr.sort((a, b) => {
        if (a[1] !== b[1]) {
            return a[1] - b[1]
        } else {
            return a[0] - b[0]
        }
    })
    for(let ele of arr){
        if(ele[0]>=endTime){
            answer++
            endTime = ele[1]
        }
    }
    return answer;
}

let arr = [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
console.log(solution(arr));