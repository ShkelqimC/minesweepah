import React, { useState } from 'react';
import { createBoard } from '../script';
import Cell from './Cell'
import '../App.css'
import { v4 as uuidv4 } from 'uuid';

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
    let board = createBoard(game.h, game.w, game.mines)
    const [field, setField] = useState(board);

    const handleClick = (e, x, y) => {
        debugger
        e.preventDefault()
        console.log(e, "e")
        console.log(x, "x")
        console.log(y, "y")
        board[y][x].isOpen = true;
        console.log(board[y][x], "board x y")
    }

    return (
        <div>
            <div className="board" style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${game.h},20px)`,
                gridTemplateRows: `repeat(${game.w}, 20px)`

            }}>
                {
                    field.map((row, y) => row.map((col, x) => <Cell className="cell"
                        handleClick={(e, y, x) => handleClick(e, y, x)}
                        x={x}
                        y={y}
                        item={col}
                        data={board}
                        game={game}
                        key={uuidv4()}
                    />))
                }

            </div>
        </div>
    );
}

export default Board;
