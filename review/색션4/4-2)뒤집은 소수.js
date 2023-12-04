function solution(arr) {
    let answer = []
    for (let ele of arr) {
        let reverse = Number(String(ele).split('').reverse().join(''))
        let isPrime = true;

        if (reverse > 1) {
            for (let i = 2; i <= Math.floor(Math.sqrt(reverse)); i++) {
                if (reverse % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                answer.push(reverse);
            }
        }
    }
    return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
