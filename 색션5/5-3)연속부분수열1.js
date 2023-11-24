function solution(m, arr) {
    let result = 0;
    let sum = 0;
    let start = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum === m) {
            result++;
        }
        while (sum >= m) {
            sum -= arr[start];
            start++
            
            if (sum === m) {
                result++;
            }
        }
    }
    return result;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));