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
        < div className='cell' style={{}}> {state(item)} </div >
    );
}
export default Cell;
