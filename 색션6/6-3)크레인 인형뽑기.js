function solution(board, moves) {
    let answer = 0;
    let newBoard = [];
    let basket = []
    let current = []
    for (let i = 0; i < board.length; i++) {
        let newRow = [];
        for (let j = board.length - 1; j >= 0; j--) {
            if (board[j][i] !== 0) {
                newRow.push(board[j][i])
            }
        }
        newBoard.push(newRow)
    }
    for (let ele of moves) {
        current = newBoard[ele - 1].pop()
        if (current !== undefined) {
            basket.push(current)
        }
    }
    return basket;
}

let a = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));