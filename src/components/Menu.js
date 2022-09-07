import React, { useState } from 'react';
import Board from './Board'
import Counter from './Counter'
import { v4 as uuidv4 } from 'uuid';


const Menu = () => {
    const [diff, setDiff] = useState("easy")
    const [gamestate, setGamestate] = useState({ playing: false, timerOn: false })


    const btnStart = (e) => {
        setDiff((e.target.value))
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

    let difficulties = ['easy', 'intermediate', 'expert']
    return (
        <div className='outer'>
            {gamestate.playing && (<Counter />)}
            {!gamestate.playing &&

                <div className='options'>
                    <span>Choose difficulty</span>
                    <div className='checkBoxes'>

                        {difficulties.map(diff => {
                            return (
                                <button key={uuidv4()} style={{ background: (diff === 'easy' ? 'green' : (diff === 'intermediate' ? 'orange' : 'red')) }} onClick={((e) => btnStart(e))} value={diff}> {diff.charAt(0).toUpperCase() + diff.slice(1)} </button>
                            )
                        })}
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
