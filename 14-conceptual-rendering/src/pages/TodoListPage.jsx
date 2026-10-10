import React, { useState } from 'react'
import './TodoListPage.css'
import { Link } from 'react-router-dom'

const initialTodos = [
    {id: 1, text: "Вигуляти собаку", priority: "high"},
    {id: 2, text: "Випити чашку кави", priority: "low"},
    {id: 3, text: "Зробити домашнє завдання", priority: "high"},
    {id: 4, text: "Пограти в ігри", priority: "low"},
    {id: 5, text: "Зустрітися з друзями", priority: "high"},
];

function TodoListPage() {
    const [todos, setTodos] = useState(initialTodos)
    const [newTodoText, setNewTodoText] = useState('')

    const handleAddTodo = () => {
        if (newTodoText.trim() === ""){
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: newTodoText,
            priority: 'low'
        };

        setTodos([...todos, newTodo]);
        setNewTodoText('');
    };

    return (
        <div className="page-container">
            <div className="">
                <Link to="/">На головну</Link>
            </div>
            
            <h1>Список справ</h1>

            <div className="add-todo-form">
                <input 
                    type="text"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                    placeholder="Нове завдання ..."
                />
                <button onClick={handleAddTodo}>Додати завдання</button>
            </div>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className={todo.priority}>
                        <span>{todo.text}</span>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default TodoListPage