import React from 'react'

function Joke(props) {
    return (
        <div>
            <p style={{display: !props.question && "none"}}>{`Question: ${props.question}`}</p>
            <p>{`Punch line: ${props.punchLine}`}</p>
        </div>
    )
}

export default Joke