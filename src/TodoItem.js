import React from 'react'

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onChange={() => console.log(`Input with key ${props.item.id} changed!`)} />
            <label>{props.item.text}</label>
        </div>
    )
}

export default TodoItem