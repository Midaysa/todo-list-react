import React, { useState } from 'react';

export const TodoForm = ({addTodo}) => {
    const [task, setTask] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault("");
        addTodo(task);
        setTask("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} placeholder="What do you need to do?"
                   onChange={(e) => setTask(e.target.value)}/>
            <button type="submit" >Add Task</button>

        </form>
    )
}