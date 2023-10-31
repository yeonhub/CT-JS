function solution(arr) {
    let result = []
    for (let ele of arr) {
        let reverseNum = Number(ele.toString().split('').reverse().join(''))
        if (reverseNum > 1) {
            let isPrime = true;
            for (let i = 2; i < parseInt(Math.sqrt(reverseNum)); i++) {
                if (reverseNum % i === 0) {
                    isPrime = false
                    break;
                }
            }
            if (isPrime) {
                result.push(reverseNum)
            }
        }
    }
    return result
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));