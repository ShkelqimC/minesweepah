import React, { useState } from 'react';
import Board from './Board'

const Menu = () => {
    const [isShown, setIsShown] = useState(false)
    const [diff, setDiff] = useState("")


    const btnStart = (e) => {
        setIsShown(current => !current)
    }

    const handleChange = event => {
        setDiff(event.target.value);
    };


    return (
        <div className='options'>
            <span>Choose difficulty</span>
            <div className='checkBoxes'>
                <input type="radio"
                    value="easy"
                    name="difficulty"
                    onChange={handleChange}
                />
                <span style={{ color: 'green' }}>Easy</span>

                <input
                    type="radio"
                    value="intermediate"
                    name="difficulty"
                    onChange={handleChange}
                />
                <span style={{ color: 'orange' }}>intermediate</span>

                <input
                    type="radio"
                    value="expert"
                    name="difficulty"
                    onChange={handleChange}
                />
                <span style={{ color: 'Red' }}>Expert</span>


            </div>
            <div className='buttons'>
                <button onClick={btnStart}>PLAY</button>
            </div>
            {isShown && (<Board diff={diff} />)}
        </div>
    );
}
const Checkbox = ({ label, value, onChange }) => {
    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    )
}

export default Menu;
