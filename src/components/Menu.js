import React, { useState } from 'react';
import Board from './Board'
import Counter from './Counter'
const Menu = () => {
    const [diff, setDiff] = useState("")
    const [gamestate, setGamestate] = useState({ playing: false, timerOn: false })



    const btnStart = (e) => {
        setGamestate({
            playing: true,
            timerOn: true,
        })
    }
    const btnReset = (e) => {
        setGamestate({
            playing: false,
            timerOn: false,
        })
    }

    const handleChange = event => {
        setDiff(event.target.value);
    };


    return (

        <div className='outer'>
            {gamestate.playing && (<Counter />)}
            {!gamestate.playing &&
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
                    <button className='btnPlay' onClick={btnStart}>PLAY</button>
                </div>
            }
            <div className='buttons'>
                {gamestate.playing && (<Board diff={diff} />)}
                {gamestate.playing && (<button className='resetBtn' onClick={btnReset}>Reset</button>)}
            </div>
        </div>
    );
}

export default Menu;
