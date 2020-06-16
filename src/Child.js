import React, {useContext} from 'react';
import CounterContext from './Countercontext';

const Child = () => {

    let counterValue = useContext(CounterContext)
    console.log(counterValue)
    return (
        <div>
            <h2>This is first child using Counter Context</h2>
            <h3>Conter value is: {counterValue[0]}</h3>

            <button onClick={()=> {counterValue[1](++counterValue[0])}}>
                increament Context
            </button>
        </div>

    )
}

export default Child;