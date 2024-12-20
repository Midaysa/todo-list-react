import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({value, toggleComplete, editTodo, deleteTodo}) => {
    return (
        <div>
            <FontAwesomeIcon icon={value.isCompleted ? faCheck : faSquare}
                             onClick={() => toggleComplete(value.id)}/>
            <p>{value.task}</p>
            <FontAwesomeIcon icon={faPen} onClick={() => editTodo(value.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(value.id)}/>
        </div>
    )
}