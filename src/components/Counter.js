import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [sCounter, setSCounter] = useState(0);
    const [msCounter, setmsCounter] = useState(1);

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);


    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            setRunning(!running);
        }
        return () => clearInterval(interval);
    }, [running]);



    useEffect(() => {
        setTimeout(() => {
            setSCounter(sCounter + 1)

        }, 1000);
    })
    useEffect(() => {
        setTimeout(() => {
            if (msCounter < 10) {
                setmsCounter(msCounter + 1)
            } else {
                setmsCounter(0)
            }

        }, 100);
    })


    return (
        <div>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
    );
}

export default Counter;
