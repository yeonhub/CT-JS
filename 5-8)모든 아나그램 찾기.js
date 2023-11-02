function compareMaps(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (let [key, val] of map1) {
        if (!map2.has(key) || map2.get(key) !== val) return false;
    }
    return true;
}
function solution(s, t) {
    let answer = 0;
    let wordArr = {}
    let strinfArr = {}

    for (let ele of t) {
        if (!wordArr[ele]) {
            wordArr[ele] = 1
        } else {
            wordArr[ele] += 1
        }
    }

    for (let i = 0; i < t.length - 1; i++) {
        if (wordArr[t[i]]) {
            wordArr[t[i]] -= 1;
        }

        return wordArr;
    }

    
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));