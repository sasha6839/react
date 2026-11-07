import { useState } from 'react'
import './App.css'
import SimpleForm from './components/SimpleForm'
import ValidationForm from './components/ValidationForm'
import OrderForm from './components/OrderForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="forms-container">
      <SimpleForm />
      <ValidationForm />
      <OrderForm />
    </div>
      
  )
}

export default App
