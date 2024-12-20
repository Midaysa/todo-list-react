import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({value, toggleComplete, deleteTodo}) => {
    return (
        <div>
            <FontAwesomeIcon icon={value.isCompleted ? faCheck : faSquare}
                             onClick={() => toggleComplete(value.id)}/>
            <p>{value.task}</p>
        </div>
    )
}