import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import HeroCard from './components/HeroCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Компоненти React</h1>
      
      <WelcomeMessage />

      <HeroCard />

    </div>
  )
}

export default App
