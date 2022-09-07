import React from 'react';

const Cell = ({ item, x }) => {
    return (
        < div className='cell'> {item.isMine === true ? "💥" : item.minesAround} </div >
    );
}

export default Cell;
