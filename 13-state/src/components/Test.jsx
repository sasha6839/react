import { useState } from 'react'

function Test() {
    const [count, setCount] = useState(0)
    console.log(count, setCount)

    return (
        <div></div>
    )
}

export default Test