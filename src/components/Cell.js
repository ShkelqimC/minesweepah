import React from 'react';

const Cell = ({ item, x, y, data }) => {

    const state = (tile) => {
        let { isMine, minesAround, isOpen } = tile
        if (isMine)
            return "💥"
        if (minesAround !== 0)
            return minesAround
        if (isOpen)
            return '💪'
    };

    return (
        < div className='cell' style={{ color: `${state(item) == 1 ? "blue" : state(item) == 2 ? "green" : state(item) == 3 ? "purple" : "black"}` }}> {state(item)} </div >
    );
}
export default Cell;
