import { useState } from 'react'

function setColor(color) {
    if(color > 3) 
        { color = 1 } 
        elif(color === 1){setColor1('red')} 
        elif(color === 2){setColor2('yellow')} 
        elif(color === 3){setColor3('green')}

function Lights() {
    let color = 0
    
    const [color1, setColor1] = useState('gray')
    const [color2, setColor2] = useState('gray')
    const [color3, setColor3] = useState('gray')


    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ backgroundColor: color1, width: '100px', height: '100px' }}></div>
                <div style={{ backgroundColor: color2, width: '100px', height: '100px' }}></div>
                <div style={{ backgroundColor: color3, width: '100px', height: '100px' }}></div>
            </div>
            <button onClick={() => {color++, setColor(color) }}>Change Light</button>
        </div>
    )
}
export default Lights