import { keyboard } from "@testing-library/user-event/dist/keyboard"

export function createBoard(width = 0, height = 0, mineCount = 0) {

    let arr = new Array(width)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Array(height).fill()
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            arr[i][j] = {
                x: i,
                y: j,
                isMine: false,
                minesAround: 0
            }
        }
    }

    let boardWithMines = generateMines(width, height, arr, mineCount)
    let finalBoard = getSurroundingMines(boardWithMines, height, width)
    console.log(finalBoard, "finalboard")
    return finalBoard
}

export function generateMines(width = 0, height = 0, data = [], mineCount = 0) {
    let currentMineCount = 0;
    while (currentMineCount < mineCount) {
        let randomX = Math.floor(Math.random() * width);
        let randomY = Math.floor(Math.random() * height);
        if (!data[randomX][randomY].isMine) {
            data[randomX][randomY].isMine = true;
            currentMineCount++;
        }
    }
    return data
}

export function getSurroundingTiles(x = 0, y = 0, data = [], height = 0, width = 0) {
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
        console.log(`x=${x}y=${y} || xx=${toCheckX}yy=${toCheckY}`)
        if (toCheckX >= 0 && toCheckX < width && toCheckY >= 0 && toCheckY < height) {
            neighbors.push(data[toCheckX][toCheckY])
            console.log(data[toCheckX][toCheckY], "pushed")
        }
    })
    return neighbors;
}
export const getSurroundingMines = (data = [], height = 0, width = 0) => {
    let dataCopy = data;
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            let surroundingMines = 0;
            let around = getSurroundingTiles(data[i][j].x, data[i][j].y, data, height, width)
            around.map(item => {

                if (item.isMine) {
                    surroundingMines++;
                }
                return 0;
            })
            dataCopy[i][j].minesAround = surroundingMines;
        }
    }
    return dataCopy;
}