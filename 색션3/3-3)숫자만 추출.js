function solution(str) {
    console.log(Number(str.replaceAll(/[^0-9]/gi,'')));
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));