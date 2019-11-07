import React from 'react'

function App() {
    return (
        <div>
            <figure>
                <img src="https://www.fillmurray.com/200/100"
                    onClick={() => console.log("I was clicked!")}  
                    onMouseOver={() => console.log("I was moused over!")}  
                />
                <figcaption>Click me!</figcaption>
            </figure>
        </div>
    )
}

export default App