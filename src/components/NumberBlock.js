import React from 'react';
import styles from '../styles/NumberBlock.module.css'


const NumberBlock = ({value}) => {
    return (
        <div>
            <div className={value >= 26 ? styles.containerB : styles.container}> 
                {value}
            </div>
        </div>
    );
};

export default NumberBlock;