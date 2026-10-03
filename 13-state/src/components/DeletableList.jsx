import { useState } from 'react'

function handleDelete(index, items, setItems) {
    setItems(items.map((item, i) => i === index ? "Видалено" : item))
    console.log(`Deleted item at index ${index}`)
}

function DeletableList() {
    const [items, setItems] = useState(['Яблуко', 'Банан', 'Виноград', 'Апельсин'])
    console.log('Current items:', items)

    return (
        <div>
            <h2>Завдання 4.</h2>
            <p>Список з можливістю видалення</p>
            <ul width="100px">
                {items.map((item, index) => item !== "Видалено" ? (
                    <li key={index} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{justifyContent: 'start', fontWeight: 'bold'}}> {item} </div>
                        <div style={{justifyContent: 'end'}}><button onClick={() => handleDelete(index, items, setItems)}>X</button></div>
                    </li>
                ) : (
                    <li key={index} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{justifyContent: 'start'}}> Видалено </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DeletableList