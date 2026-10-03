import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import './App.css'
import RegistrationPage from './pages/RegistrationPage'
import TodoListPage from './pages/TodoListPage'
import ProductsPage from './pages/ProductsPage'

const HomePage = () => (
  <div className="home-container">
    <h1>Редер сторінок</h1>
    <p>Виберіть сторінку для перегляду</p>
    <div>
      <Link to="/registration">Реєстрація</Link>
      <Link to="/todo">Список справ</Link>
      <Link to="/products">Фільтр товарів</Link>
    </div>
  </div>
)

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/todo" element={<TodoListPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
