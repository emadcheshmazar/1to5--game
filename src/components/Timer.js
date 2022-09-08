import React, { useEffect, useState } from 'react';
import styles from '../styles/Timer.module.css'



const Timer = ({isTimerOn}) => {

    const [time, setTime] = useState(0)
    
    useEffect(() => {

        let interval = null;

        if(isTimerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10);
        } else {
            clearInterval(interval)
        }


        return () => clearInterval(interval)

    }, [isTimerOn])

    // {console.log(Math.floor((1000 / 1000) % 60))}
    {console.log(1 ^ 9)}
    
    return (
        <div className={styles.timer} value={time}>
            <span> {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{('0' + (time / 10) % 100).slice(-2)}</span>
        </div>
    );
};

export default Timer;