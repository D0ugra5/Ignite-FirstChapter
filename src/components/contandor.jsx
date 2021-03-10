import React from 'react'
import {useState} from 'react'



export const Contandor = () => {
    const [count, setCount] = useState(0)
    function increment() {
  
        setCount(count + 1 )
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment} type='button'>
                Increment
                </button>
        </div>
    )
}

