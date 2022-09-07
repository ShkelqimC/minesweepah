import React from 'react';

const Cell = ({ item, x, y, handleClick }) => {
    const state = (tile) => {
        const { isMine, minesAround } = tile
        if (isMine)
            return "💥"
        if (minesAround != 0)
            return minesAround
    }

    return (
        < div className='cell' onClick={(e) => handleClick(e, x, y)}> {state(item)} </div >
    );
}
//{item.isMine ? "💥" : item.minesAround != 0 ? item.minesAround : ''}
export default Cell;
