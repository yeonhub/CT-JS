function solution(target, arr) {
    let sortArr = arr.slice().sort()
    let lt = 0, 
        rt = arr.length - 1,
        mid = parseInt((lt + rt) / 2)


    while (lt <= rt) {
        mid = parseInt((lt + rt) / 2)
        if (target === sortArr[mid]) {
            return mid + 1
        } else if (target > sortArr[mid]) {
            lt = mid + 1
        } else if (target < sortArr[mid]) {
            rt = mid -1
        }
    }
    return -1
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));