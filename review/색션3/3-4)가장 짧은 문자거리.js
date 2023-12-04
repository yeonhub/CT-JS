function solution(s, t) {
    let arr = Array(s.length).fill(0)
    let point = 100;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === t) {
            arr[i] = 0
            point = 0
        } else {
            point++
            arr[i] = point
        }
    }
    point = 100
    for (let j = s.length - 1; j >= 0; j--) {
        if (s[j] === t) {
            point = 0;
        } else {
            point ++
            arr[j] = Math.min(arr[j], point)
        }
    }
    return arr
}

let str = "teachermode";
console.log(solution(str, 'e'));