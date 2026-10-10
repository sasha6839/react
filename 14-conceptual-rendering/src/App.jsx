import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import './App.css'
import RegistrationPage from './pages/RegistrationPage.jsx'
import TodoListPage from './pages/TodoListPage.jsx'

const HomePage = () => (
  <div className="home-container">
    <h1>Рендер сторінок</h1>
    <p>Виберіть сторінку для перегляду</p>
    <div>
      <Link to="/registration" className="nav-button">Реєстрація</Link>
      <Link to="/todo" className="nav-button">Список справ</Link>
      <Link to="/products" className="nav-button">Фільтр товарів</Link>
    </div>
  </div>
);

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/todo" element={<TodoListPage />} />
        </Routes>
      </Router>
  )
};

export default App
