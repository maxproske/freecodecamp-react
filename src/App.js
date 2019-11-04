import React from 'react'

function App() {
    const firstName = 'Max'
    const lastName = 'Proske'
    const isMorning = (new Date()).getHours() < 12;
    return (
        <h1 className="header">Good {(isMorning) ? 'morning,' : 'night'}, {`${firstName} ${lastName}`}</h1>
    )
}

export default App