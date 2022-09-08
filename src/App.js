import React from 'react';
import Blocks from './components/Blocks';
import ListAProvider from './components/ListAProvider';
import ListBProvider from './components/ListBProvider';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <ListAProvider>
        <ListBProvider>
          <Blocks />
        </ListBProvider>
      </ListAProvider>
    </div>
  );
}

export default App;
