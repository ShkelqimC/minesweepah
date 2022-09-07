import React from 'react';
import { createBoard } from '../script';
import Cell from './Cell'
import '../App.css'

const Board = () => {

    const game = {
        w: 8,
        h: 8,
        mines: 10,
    }
    let board = createBoard(game.w, game.h, game.mines)
    // let boardWithMines = generateMines(game.w, game.h, board, game.mines)
    // let finalBoard = getSurroundingMines(boardWithMines, game.h, game.w)
    return (
        <div>
            <div className="board" style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${game.w}, 25px)`,
                gridTemplateRows: `repeat(${game.w}, 25px)`

            }}>
                {
                    board.map((row, y) => row.map((col, x) => <Cell className="cell"
                        item={col}
                        key={`${x}-${y}`}
                    />))
                }

            </div>
        </div>
    );
}

export default Board;
