function solution(arr){
    let answer=[];
    let sortArr = [...arr].sort()
    for(let i=0; i<sortArr.length; i++){
        if(sortArr[i]!==arr[i]) answer.push(i+1)
    }
    return answer
}

let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
console.log(solution(arr));