import React from 'react'
import ReactDOM from 'react-dom'

function MyInfo() {
    return (
        <>
        <h1 className="red">Max</h1>
        <p>I am good at computers 1010100101</p>
        <ul>
            <li>I</li>
            <li>D</li>
            <li>K</li>
        </ul>
        </>
    )
}

ReactDOM.render(
    <MyInfo/>,
    document.getElementById('root')
)