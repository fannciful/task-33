// TodoList.js
import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue) {
            setTodos((prevTodos) => [...prevTodos, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const toggleTodo = (index) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo, i) =>
                i === index ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (index) => {
        setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    return (
        <div className="todo-list">
            <div className="todo-input-container">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="New task"
                    className="todo-input"
                    data-testid="todo-input"
                />

                <button onClick={addTodo} className="add-button">Add</button>
            </div>
            <ul className="todo-items">
                {todos.map((todo, index) => (
                    <li key={index} className="todo-item">
                        <label className="todo-label">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(index)}
                                className="todo-checkbox"
                            />
                            <span
                                className={`todo-text ${todo.completed ? 'completed' : ''}`}
                            >
                                {todo.text}
                            </span>
                        </label>
                        <button
                            onClick={() => deleteTodo(index)}
                            className="delete-button"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;