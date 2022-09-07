import React, { useState } from 'react';
import { getBoardSize, prepareGame } from '../script';
import Cell from './Cell'
import '../App.css'
import { v4 as uuidv4 } from 'uuid';

const Board = ({ diff }) => {
    const [game, board] = prepareGame(diff);
    const [field, setField] = useState(board);


    return (
        <div>
            <div className="board" style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${game.h},20px)`,
                gridTemplateRows: `repeat(${game.w}, 20px)`

            }}>
                {
                    field.map((row, y) => row.map((col, x) => <Cell className="cell"
                        x={x}
                        y={y}
                        item={col}
                        data={field}
                        game={game}
                        key={uuidv4()}
                    />))
                }

            </div>
        </div>
    );
}

export default Board;
