import React, { useState } from 'react';
import { TodoForm } from "./TodoForm";
import {Todo} from "./Todo";

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: crypto.randomUUID(), task: todo, isCompleted: false, isEditing: false}]);
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo));
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                <Todo value={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
            ))}
        </div>
    )
}