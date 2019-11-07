import React, {Component} from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }

    render() {
        return (
            <div>
                <h1>Is state important to know?</h1>
                <p>{this.state.answer}</p>
            </div>
        )
    }
}

export default App