import { useState } from 'react'
import './App.css'
import ColorChanger from './components/ColorChanger'
import Counter from './components/Counter'
import Test from './components/Test'
import Lights from './components/Lights'

function App() {

  return (
    <div>
      <ColorChanger />
      <Counter />
      <Test />
      <Lights />
    </div>
  )
}

export default App
