function solution(size, arr) {
    let answer = Array.from({ length: size }, () => 0)
    for (let ele of arr) {
        let pos = -1;
        for (let i = 0; i < size; i++) {
            if (ele === answer[i]) {
                pos = i
            }
        }
        if(pos === -1){
            for(let i=size-1; i>0; i--){
                answer[i] = answer[i-1]
            }
        } else {
            for(let i=pos; i>0; i--){
                answer[i] = answer[i-1]
            }
        }
        answer[0] = ele
    }

    return answer
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));

