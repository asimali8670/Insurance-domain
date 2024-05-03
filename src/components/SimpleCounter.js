import React, {useState} from 'react'

const SimpleCounter = () => {

const [counter, setCounter] = useState(0);

const incrementHandler =  () => {
    setCounter(counter + 1);
};

const decrementHandler = ()=> {

if(counter > 0){
  setCounter(counter - 1);
}

  
};

  return (
    <div>
    <h1>simple counter</h1>
    <p>{counter}</p>
    <button onClick={incrementHandler}>Increment</button>
    <button onClick={decrementHandler}>Decrement</button>
      
    </div>
  )
}

export default SimpleCounter;
