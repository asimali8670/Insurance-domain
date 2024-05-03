import React, {useSate} from 'react'

const Counter = () => {

const [count, setCount] = useSate(0);


const handleIncrement = ()=> {
    setCount(count + 1);
}

const handleDecrement = ()=> {
    setCount(count - 1);
}


  return (
    <div>
    <h1>Counter:</h1>
    <p>{count}</p>

    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
      
    </div>
  )
}

export default Counter
