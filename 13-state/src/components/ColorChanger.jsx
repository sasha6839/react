import { useState } from 'react'



function ColorChanger() {
    const [color, setColor] = useState('#ffffff');


    const handleClick = () => {
        let n = Math.random() * 15000000;
        const newColor = '#' + Math.floor(n).toString(16);
        setColor(newColor);
    };
    
    
    return (
        <div>
            <h2>Завдання 1.</h2>
            <p>Колір фону кнопки змінюється при натисканні</p>
            <button onClick={handleClick} style={{backgroundColor:color}}>
                Change Color
            </button>
            
        </div>
    )
}

export default ColorChanger
