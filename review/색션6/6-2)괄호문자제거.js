// function solution(s) {
//     let answer = '';
//     let stack = [];
//     let contain = false
//     for (let ele of s) {
//         if (ele === '(') {
//             contain = true
//             stack.push(ele)
//         }
//         if (!contain) {
//             answer += ele
//         }
//         if (ele === ')') {
//             stack.pop()
//             if (stack.length === 0) contain = false
//         }
//     }
//     return answer
// }

// let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
// console.log(solution(str));

function solution(s){  
    let answer;
    let stack=[];
    for(let x of s){
        if(x===')'){
            while(stack.pop()!=='(');
        }
        else stack.push(x);
    }
    answer=stack.join('');
    return answer;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));