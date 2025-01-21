import React, { useState } from 'react';

export const EditTodoForm = ({todo, updateTodo}) => {
    const [task, setTask] = useState(todo.task);

    const handleSubmit = (event) => {
        event.preventDefault();
        // edit todo
        updateTodo(todo.id, task);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={task} placeholder="Update task"
                   onChange={(e) => setTask(e.target.value)}/>
            <button type="submit" className="todo-btn">Update Task</button>
        </form>
    )
}