import React from 'react'
import ReactDOM from 'react-dom'

function MyApp() {
    return (
        <ul>
            <li>Orange</li>
            <li>Appple</li>
            <li>Pear</li>
        </ul>
    )
}

ReactDOM.render(
    <MyApp/>,
    document.getElementById('root')
)
