import React, { useState, useEffect } from 'react';

const Cell = ({ item, x, y, data }) => {

    const state = (tile) => {
        const { isMine, minesAround, isOpen } = tile

        if (isMine)
            return "💥"
        if (minesAround != 0)
            return minesAround
        if (isOpen)
            return '💪'
    };
    return (
        < div className='cell'> {state(item)} </div >
    );
}
export default Cell;
