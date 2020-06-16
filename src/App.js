import React, {useState} from 'react';
import './App.css';
import Parent from './Parent';
import CounterContext from './Countercontext';

function App() {
  let countState = useState(1)
  //let [count,Setcount] = useState(30)

  return (
    <CounterContext.Provider value={countState}>
       <div>
         <Parent />
       </div>
    </CounterContext.Provider>
  );
}

export default App;
