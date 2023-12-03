function solution(s){
    let stack = [];
    for(let ele of s){
        if(ele==='('){
            stack.push(ele);
        } else {
            if(stack.length===0) return "NO"
            stack.pop();
        }
    }
    if(stack.length===0) {
        return "YES"
    } else {
        return "NO"
    }
}

let a="()(()";
console.log(solution(a));