import React from 'react'

function TodoItem(props) {
const completedStyle = {
    textDecoration: 'line-through',
        color: 'grey',
        fontStyle: 'italic'
    }
    return (
        <div className="todo-item">
            <input type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)} />
            <label style={props.item.completed ? completedStyle : null}>{props.item.text}</label>
        </div>
    )
}

export default TodoItem