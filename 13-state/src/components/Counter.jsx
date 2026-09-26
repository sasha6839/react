import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    return (
        <div>
            <h2>Завдання 2.</h2>
            <p>Лічильник</p>
            <div className="counter-content">
                <p className="counter">Значення: {count}</p>
                <button className="counter" onClick={() => {setCount(count + 1); console.log(count)}}>+ 1</button>
                <button className="counter" onClick={() => {setCount1(count1 + 3); console.log(count1)}}>+ 3</button>
                <p className="counter">Значення: {count1}</p>            
            </div>
        </div>
    )
}

export default Counter