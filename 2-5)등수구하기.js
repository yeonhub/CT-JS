function solution(arr) {
    let sortArr = [...arr].sort((a, b) => b - a);
    let rank = 1;
    let rankMap = {};

    sortArr.forEach((ele, idx) => {
        if (!rankMap[ele]) {
            rankMap[ele] = rank;
            if (sortArr[idx] !== sortArr[idx + 1]) {
                rank++;
            }
        }
    });

    return arr.map(ele => rankMap[ele]);
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));

function solution(arr) {
    let rankArr = []
    let rank = 1
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            arr[i] < arr[j] ? rank++ : null
        }
        rankArr.push(rank)
        rank = 1;
    }
    return rankArr;
}

let arr2 = [87, 87, 92, 100, 76];
console.log(solution(arr2));