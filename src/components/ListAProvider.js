import React, { createContext } from 'react';

export const listAContext = createContext()

const numberListA = [];
while(numberListA.length < 25){
    const randomNumber = Math.floor(Math.random() * 25) + 1;
    if(numberListA.indexOf(randomNumber) === -1) numberListA.push(randomNumber);
}


const ListAProvider = ({children}) => {


    return (
        <listAContext.Provider value={numberListA}>
            {children}
        </listAContext.Provider>
    );
};

export default ListAProvider;