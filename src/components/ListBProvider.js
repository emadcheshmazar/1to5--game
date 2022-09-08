import React, { createContext } from 'react';

export const listBContext = createContext()

const numberListB = [];
while(numberListB.length < 25){
    const randomNumber = Math.floor(Math.random() * 50) + 1;
    if(numberListB.indexOf(randomNumber) === -1 && randomNumber > 25) numberListB.push(randomNumber);
}

const ListBProvider = ({children}) => {

    return (
        <listBContext.Provider value={numberListB}>
            {children}
        </listBContext.Provider>
    );
};

export default ListBProvider;