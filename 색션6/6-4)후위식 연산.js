function solution(s){  
    let stack = [];
    for(let ele of s){
        if(!isNaN(ele)){
            stack.push(Number(ele))
        } else {
            let last = stack.pop();
            let first = stack.pop();
            if(ele==='+') stack.push(first+last)
            if(ele==='*') stack.push(first*last)
            if(ele==='-') stack.push(first-last)
            if(ele==='/') stack.push(first/last)
        }
    }
    return stack[0]
}

let str="352+*9-";
console.log(solution(str));