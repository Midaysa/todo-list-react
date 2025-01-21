import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({value, toggleComplete, editTodo, deleteTodo}) => {
    return (
        <div className="todo">
            <div className="vertical-align">
                <FontAwesomeIcon icon={value.isCompleted ? faCheck : faSquare}
                                 onClick={() => toggleComplete(value.id)}/>
                <p className={`margin-left-s ${value.isCompleted ? "completed" : "uncompleted"}`}>{value.task}</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faPen} onClick={() => editTodo(value.id)} className="margin-left-s"/>
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(value.id)} className="margin-left-s"/>
            </div>
        </div>
    )
}