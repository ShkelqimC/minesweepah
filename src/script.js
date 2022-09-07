import { keyboard } from "@testing-library/user-event/dist/keyboard"

export function createBoard(width = 0, height = 0, mineCount = 0) {
    let arr = new Array(height)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Array(width).fill()
    }
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            arr[i][j] = {
                x: i,
                y: j,
                isMine: false,
                minesAround: 0,
                isOpen: false,
                noMinesAround: false,
            }
        }
    }
    let boardWithMines = generateMines(width, height, arr, mineCount)
    let finalBoard = getSurroundingMines(boardWithMines, height, width)
    return finalBoard
}

export function generateMines(width = 0, height = 0, data = [], mineCount = 0) {

    console.log(data)
    let currentMineCount = 0;
    while (currentMineCount < mineCount) {
        let randomX = Math.floor(Math.random() * width);
        let randomY = Math.floor(Math.random() * height);
        if (!data[randomY][randomX].isMine) {
            data[randomY][randomX].isMine = true;
            currentMineCount++;
        }
    }
    return data
}

export function getSurroundingTiles(y = 0, x = 0, data = [], height = 0, width = 0) {
    let surroundingTiles = [
        [-1, -1],// northwest
        [0, -1], //north
        [1, -1], //northeast
        [1, 0],  //east
        [1, 1],  //southeast
        [0, 1],  //south
        [-1, 1], //southwest
        [-1, 0], //west
    ];

    let neighbors = [];
    surroundingTiles.forEach(([xx, yy]) => {
        const toCheckY = y - yy;
        const toCheckX = x - xx;
        if (toCheckX >= 0 && toCheckX < width && toCheckY >=
            0 && toCheckY < height) {
            neighbors.push(data[toCheckY][toCheckX])
        }
    })
    return neighbors;
}
export const getSurroundingMines = (data = [], height = 0, width = 0) => {
    let dataCopy = data;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            let surroundingMines = 0;
            let around = getSurroundingTiles(data[i][j].x, data[i][j].y, data, height, width)
            around.map(item => {

                if (item.isMine) {
                    surroundingMines++;
                }
                return 0;
            })
            if (surroundingMines === 0) {
                dataCopy[i][j].noMinesAround = true;
            }
            dataCopy[i][j].minesAround = surroundingMines;
        }
    }
    return dataCopy;
}

export const getSurroundingFrendlies = (data = [], height = 0, width = 0) => {
    let frens = []
    let dataCopy = data;
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            let surroundingMines = 0;
            let around = getSurroundingTiles(data[i][j].x, data[i][j].y, data, height, width)
            around.map(item => {

                if (item.minesAround <= 1) {
                    frens.push(item)
                }
            })
            dataCopy[j][i].minesAround = surroundingMines;
        }
    }
    return frens;
}
export const getBoardSize = (diff) => {

    const boardSize = {
        easy: {
            w: 8,
            h: 8,
            mines: 10,
        },
        intermediate: {
            w: 16,
            h: 16,
            mines: 40,
        },
        expert: {
            w: 16,
            h: 30,
            mines: 99,
        }
    }
    let game = {}
    if (diff === 'easy' || diff === null) {
        game = boardSize.easy
    } else if (diff === 'intermediate') {
        game = boardSize.intermediate
    } else if (diff === 'expert') {
        game = boardSize.expert
    }
    return game

}