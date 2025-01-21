import React, { useState } from 'react';
import { TodoForm } from "./TodoForm";
import {Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: crypto.randomUUID(), task: todo, isCompleted: false, isEditing: false}]);
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const updateTodo = (id, task) => (
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    )

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className="todo-wrapper">
            <h1>What's your main focus for today?</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                todo.isEditing ? (
                    <EditTodoForm todo={todo} updateTodo={updateTodo} />
                ) : (
                    <Todo value={todo} key={todo.id} toggleComplete={toggleComplete} editTodo={editTodo} deleteTodo={deleteTodo}/>
                )
            ))}
        </div>
    )
}