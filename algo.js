"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextBoard = void 0;
const nextBoard = (board) => {
    if (!board)
        return;
    const neighbors = [[1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1]];
    let copy = [];
    for (let i = 0; i < board.length; i++) {
        let newRow = [];
        for (let j = 0; j < board[0].length; j++) {
            newRow.push(board[i][j]);
        }
        copy.push(newRow);
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let liveNeighbors = 0;
            for (const neighbor of neighbors) {
                let r = i + neighbor[0];
                let c = j + neighbor[1];
                if (r >= 0 && r < board.length && c >= 0 && c < board[0].length) {
                    if (copy[r][c])
                        liveNeighbors += 1;
                }
            }
            if (copy[i][j] === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
                board[i][j] = 0;
            }
            if (copy[i][j] === 0 && liveNeighbors === 3) {
                board[i][j] = 1;
            }
        }
    }
};
exports.nextBoard = nextBoard;
