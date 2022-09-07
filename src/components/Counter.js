import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [sCounter, setSCounter] = useState(0);
    const [msCounter, setmsCounter] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setSCounter(sCounter + 1)

        }, 1000);
    })
    useEffect(() => {
        setTimeout(() => {
            if (msCounter < 9) {
                setmsCounter(msCounter + 1)
            } else {

                setmsCounter(0)
            }

        }, 100);
    })


    return (
        <div>
            Time: {sCounter}:{msCounter}
        </div>
    );
}

export default Counter;
