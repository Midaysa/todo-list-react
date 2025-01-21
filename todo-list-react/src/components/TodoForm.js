import React, { useState } from 'react';

export const TodoForm = ({addTodo}) => {
    const [task, setTask] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault("");
        addTodo(task);
        setTask("");
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={task} placeholder="Today I need to..."
                   onChange={(e) => setTask(e.target.value)}/>
            <button type="submit" className="todo-btn" >Add Task</button>

        </form>
    )
}