import React, { useState } from 'react';
import { TodoForm } from "./TodoForm";
import {TodoList} from "./TodoList";

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, {id: crypto.randomUUID(), task: todo, isCompleted: false, isEditing: false}]);
    }

    return (
        <div>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                <TodoList value={todo.task} key={todo.id}/>
            ))}
        </div>
    )
}