import { useState } from 'react'
import './App.css'
import ColorChanger from './components/ColorChanger'
import Counter from './components/Counter'
import Test from './components/Test'
import Lights from './components/Lights'
import TernaryButton from './components/TernaryButton'
import DeletableList from './components/DeletableList'

function App() {

  return (
    <div>
      <ColorChanger />
      <Counter />
      <Test />
      <Lights />
      <TernaryButton />
      <DeletableList />
    </div>
  )
}

export default App
