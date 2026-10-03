import { useState } from 'react'

function TernaryButton() {
    const [state, setState] = useState(false);

    return (
        <div>
            <h2>Завдання 3.</h2>
            <p>Тернарна кнопка</p>
            <button onClick={() => setState(!state)}>
                button
            </button>
            <p>Стан: {state ? 'ON' : 'OFF'}</p>
        </div>
    )
}

export default TernaryButton