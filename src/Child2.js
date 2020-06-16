import React, {useReducer} from 'react';
import counterReducer from './counterReducer';
const Child2 = () =>{

    let [state,dispatch] = useReducer(counterReducer, 1)

    console.log(state)
   return(
       <div>
           <h2>This is second child using Counter Reducer</h2>
           <h3>value of reducer state is:{state} </h3>
           <button onClick={() =>dispatch('INCREAMENT')}>Increament Reducer</button>
       </div>
   )
}

export default Child2;