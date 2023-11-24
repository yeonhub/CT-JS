function solution(s) {
    s = s + ' '
    let result = '';
    let cnt = 1;
    for (let i = 0; i < s.length-1; i++) {
        if (s[i] === s[i + 1]) {
            cnt++
        } else {
            result += s[i]
            if(cnt >1) {
                result += cnt
            }

            cnt = 1
        }
    }
    return result;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));