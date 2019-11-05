import React from 'react'
import Joke from './Joke'

function App() {
    return (
        <div>
            <Joke 
                question="Time flies like an arrow." 
                punchLine="Fruit flies like a banana." 
            />
            <Joke 
                punchLine="One-liner." 
            />
        </div>
    )
}

export default App