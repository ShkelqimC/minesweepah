import React from 'react';
import { createBoard } from '../script';
import Cell from './Cell'
import '../App.css'

const Board = ({ diff }) => {
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
    console.log(game, "game")
    let board = createBoard(game.h, game.w, game.mines)
    // let boardWithMines = generateMines(game.w, game.h, board, game.mines)
    // let finalBoard = getSurroundingMines(boardWithMines, game.h, game.w)
    return (
        <div>
            <div className="board" style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${game.h},20px)`,
                gridTemplateRows: `repeat(${game.w}, 20px)`

            }}>
                {
                    board.map((row, y) => row.map((col, x) => <Cell className="cell"
                        item={col}
                        data={board}
                        game={game}
                        key={`${x}-${y}`}
                    />))
                }

            </div>
        </div>
    );
}

export default Board;
