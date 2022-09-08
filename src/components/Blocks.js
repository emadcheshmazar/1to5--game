import React, { useState, useContext } from 'react';
import NumberBlock from './NumberBlock';
import styles from '../styles/Blocks.module.css';
import { listAContext } from './ListAProvider';
import { listBContext } from './ListBProvider';
import Timer from './Timer';


const Blocks = () => {

    const numberListA = useContext(listAContext)
    const numberListB = useContext(listBContext)

    const [counter, setCounter] = useState(1)
    const [isShown, setIsShown] = useState(true)
    const [timerOn, setTimerOn] = useState(false)
    
    const clickHandeler = (event) => {
        const value = parseInt(event.target.innerText)
        if(value === counter) {
            event.target.className = styles.hide
            setCounter(prevState => prevState + 1)
            setIsShown(false)
        }
        value === 1 && setTimerOn(true)
        value === 50 && setTimerOn(false)
    }

    return (
        <>
            <div className={styles.timer}>
                timer
                 <Timer 
                    isTimerOn={timerOn}
                />
                <span>{counter}</span>
            </div>
                    {
                        counter > 50 ? <button onClick={() => {window.location.reload()}} className={styles.button}>try again</button> : <button onClick={() => {window.location.reload()}} className={styles.button}>reset</button>
                    }
            <div className={styles.container}>
                <div className={counter >= 26 ? styles.delete : styles.listAContainer}>
                    {
                        numberListA.map(number => {
                            return <div 
                            key={number}
                            onClick={clickHandeler}
                            >
                                <NumberBlock
                                value={number}
                                showHide={isShown}
                                />
                            </div>
                        })
                    }
                </div>
                <div className={counter > 50 ? styles.delete : styles.listBContainer}>
                    {
                        numberListB.map(number => {
                            return <div 
                            className={styles.listB}
                            key={number}
                            onClick={clickHandeler}
                            >
                                <NumberBlock
                                value={number}
                                showHide={isShown}
                                />
                            </div>
                        })
                    }
                </div>
            </div>    
        </>
    );
};

export default Blocks;